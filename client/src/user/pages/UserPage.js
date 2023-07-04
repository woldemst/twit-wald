// import Usertweets from '../../tweets/pages/UserTweets'

import UsersList from '../components/UsersList';

import avatar from "../../images/avatar.jpeg";

export const USERS = [
  {
    id: "profile",
    name: "Max Schwarz",
    image: avatar,
    bio: "That's my official page",
    country: "Germany",
    link: "https://github.com/woldemst",
    tweets: 3,
  },
  // {
  //   id: "u2",
  //   name: "John Doe",
  //   image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   bio: "That's my official page",
  //   country: "Germany",
  //   link: "https://github.com/johndoe",
  //   tweets: 6,
  // },
  // {
  //   id: "u3",
  //   name: "Jane Smith",
  //   image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   bio: "That's my official page",
  //   country: "Germany",
  //   link: "https://github.com/jane",
  //   tweets: 3,
  // },
];

const UserPage = props => {
    return (
        <>
            <UsersList items={USERS} />
            {/* <Usertweets /> */}
        </>
    )
}
export default UserPage