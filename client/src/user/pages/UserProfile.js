import UsersList from "../components/UsersList";
import "./UserProfile.scss";

import avatar from "../../images/avatar.jpeg";

export const USERS = [
  {
    id: "u1",
    name: "Max Schwarz",
    image: avatar,
    bio: "That's my official page",
    country: "Germany",
    link: "https://github.com/woldemst",
    tweets: 3,
  },
];

const Profile = (props) => {
  return <UsersList items={USERS} />;
};
export default Profile;
