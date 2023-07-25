import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../shared/context/auth-context";

import UsersList from "../components/UsersList";

import TweetList from "../../tweets/components/TweetList";

import image from "../../images/avatar.jpeg";

export const TWEETS = [
  {
    id: "t1",
    creatorId: "u1",
    creator: {
      image: image,
      name: "Waldemar Weinert",
      nickname: "@woldemst",
    },
    postedDate: "Jun 2",
    description:
      "It's just one more day. More work, more experience. More experience, more money",
    imageUrl:
      "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80",
  },
  {
    id: "t2",
    creatorId: "u2",
    creator: {
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "John Doe",
      nickname: "@johndoe",
    },
    postedDate: "May 28",
    description: "Enjoying a beautiful day at the beach",
    imageUrl:
      "https://pbs.twimg.com/media/FzKSc68WcAAJyEH?format=jpg&name=medium",
  },
  {
    id: "t3",
    creatorId: "u3",
    creator: {
      image:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Jane Smith",
      nickname: "@janesmith",
    },
    postedDate: "Jun 1",
    description: "Exploring the stunning landscapes of the mountains",
    imageUrl:
      "https://pbs.twimg.com/media/FzKSc68WcAAJyEH?format=jpg&name=medium",
  },
  {
    id: "t4",
    creatorId: "u1",
    creator: {
      image: image,
      name: "Alex Johnson",
      nickname: "@alexjohnson",
    },
    postedDate: "May 30",
    description: "Having a delicious meal at a fancy restaurant",
    imageUrl:
      "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80",
  },
];

const UserPage = (props) => {
  const { userId } = useParams();

  const auth = useContext(AuthContext)

  // const userId = auth.userId

  const [fetchedUsers, setFetschedUsers] = useState([])
  const [fetchedTweets, setFetchedTweets] = useState([])
  
  useEffect(()=> {

    //function for fetching al of the user from backend
    const fetchUsers = async () => {
      try {
          const response = await axios.get('http://localhost:8000/api/users')
          setFetschedUsers(response.data)
          // console.log(response.data);
      } catch (err) {
        console.log('Error fetching users', err);
      }
    }

    const fetchTweets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tweets')
        setFetchedTweets(response.data)
      } catch (err) {
        console.log('Error fetching tweets', err)
        
      }
    }


    fetchTweets()
    fetchUsers()
  }, [userId])

  const loadedUser = fetchedUsers.find((u) => u._id === userId) ;
  const loadedtweets = fetchedTweets.filter((t) => t.creatorId === userId);
  // console.log(loadedUser);
  // console.log(userId);
  console.log(fetchedTweets);
  return (
    <>
      {loadedUser ? <UsersList key={loadedUser._id} items={[loadedUser]} /> : <p>User Not Found</p>}
      <TweetList key={loadedtweets._id} items={loadedtweets} />
    </>
  );
};
export default UserPage;
