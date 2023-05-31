import { Link } from "react-router-dom";

import logo from '../../../images/logo.svg'
import Navigation from "../Navigation";

import './MainHeader.scss'

const Header = () => {
  return (
    <>
      <div className="header-main">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>


        <Navigation />
      </div>
    </>
  );
};
export default Header;
