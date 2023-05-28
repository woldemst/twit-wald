import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import Navigation from "./Navigation";

import './Header.scss'

const Header = () => {
  return (
    <>
      <div className="header-main">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <ul>
          <li>Explore</li>
          <li>Settings</li>
        </ul>
        <Navigation />
      </div>
    </>
  );
};
export default Header;
