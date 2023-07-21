import { useParams } from "react-router-dom";

import UsersList from "../components/UsersList";

import TweetList from "../../tweets/components/TweetList";
import avatar from "../../images/avatar.jpeg";
import image from "../../images/avatar.jpeg";

export const USERS = [
  {
    id: "u1",
    name: "Max Schwarz",
    nickname: "maxschwarz",
    image: avatar,
    bio: "That's my official page",
    location: "Germany",
    link: "https://github.com/woldemst",
    joined: 'November 2010',
    followers: 10,
    following: 89,
    tweets: 3,
  },
  {
    id: "u2",
    name: "John Doe",
    nickname: "johndoe",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "That's my official page",
    location: "Germany",
    link: "https://github.com/johndoe",
    joined: 'April 2013',
    followers: 2,
    following: 5,
    tweets: 6,
  },
  {
    id: "u3",
    name: "Jane Smith",
    nickname: "janesmith",
    image:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "That's my official page",
    location: "Germany",
    link: "https://github.com/jane",
    joined: 'August 2020',
    followers: 1423,
    following: 314,
    tweets: 3,
  },
];

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

  const loadedUser = USERS.find((u) => u.id === userId);
  const loadedtweets = TWEETS.filter((t) => t.creatorId === userId);

  return (
    <>
      {loadedUser ? <UsersList items={[loadedUser]} /> : <p>User Not Found</p>}
      <TweetList items={loadedtweets} />
    </>
  );
};
export default UserPage;
