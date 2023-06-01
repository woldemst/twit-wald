import UsersList from "../components/UsersList";
import "./UserProfile.scss";

import avatar from '../../images/avatar.jpeg'


const Profile = (props) => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: avatar,
      tweets: 3,
    },
  ];

  return <UsersList items={USERS} />
};
export default Profile;
