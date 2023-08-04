import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../shared/context/auth-context";

import UsersList from "../components/UsersList";

import TweetList from "../../tweets/components/TweetList";

const UserPage = (props) => {
  const { userId } = useParams();

  const auth = useContext(AuthContext)

  // const userId = auth.userId

  const [fetchedUsers, setFetchedUsers] = useState([])
  const [fetchedTweets, setFetchedTweets] = useState([])
  
  useEffect(()=> {

    //function for fetching al of the user from backend
    const fetchUsers = async () => {
      try {
          const response = await axios.get('http://localhost:8000/api/users')
          setFetchedUsers(response.data)
          // console.log(response.data);
      } catch (err) {
        console.log('Fetching users failed', err);
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
  console.log(fetchedUsers);
  return (
    <>
      {loadedUser ? <UsersList key={loadedUser._id} items={[loadedUser]} /> : <p>User Not Found</p>}
      <TweetList key={loadedtweets._id} items={loadedtweets} />
    </>
  );
};
export default UserPage;
