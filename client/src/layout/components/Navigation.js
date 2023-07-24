import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react";

const Navigation = (props) => {

  const auth = useContext(AuthContext)
  return (
    <>
      <div className="navigation-container">
        <ul>
          <li>Explore</li>
          <li>Settings</li>
          {auth.isLoggedIn && (
            <li><Link to={`/${auth.userId}`}>Profile</Link></li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
