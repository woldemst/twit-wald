import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container">
        <ul>
          <li>Explore</li>
          <li>Settings</li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
