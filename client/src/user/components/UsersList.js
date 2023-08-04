import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }
  return (
    <div className="user-container">
      {props.items.map((user) => (
        <UserItem
          key={user._id}
          id={user._id}
          image={user.image}
          name={user.name}
          nickname={user.nickname}
          bio={user.bio}
          location={user.location}
          link={user.link}
          joined={user.joined}
          followers={user.followers}
          following={user.following}
          tweetCount={user.tweets}
        />
      ))}
    </div>
  );
};

export default UsersList;
