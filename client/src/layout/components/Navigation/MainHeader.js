import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Navigation";
import Button from "../../../shared/FormElements/Button";
import Modal from "../../../shared/UIElements/Modal";
import NewTweet from "../../../tweets/components/dialogs/NewTweet";

import { AuthContext } from "../../../shared/context/auth-context";
import logo from "../../../images/logo.png";
import "./MainHeader.scss";
import AccountMenu from "../account/AccountMenu";

const MainHeader = () => {
  const [showNewTweet, setShowNewTweet] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <>
      <Modal
        show={showNewTweet}
        onClose={() => setShowNewTweet(false)}
        modalClassName="new-tweet"
        header={
          <Button
            content="✕"
            className="close"
            onClick={() => setShowNewTweet(false)}
          />
        }
        footerClass="no-footer"
      >
        <NewTweet />
      </Modal>

      <div className="column aside-left">
        <div className="aside-container">
          <div className="header-main">
            <Link to="/">
              <img src={logo} alt="" className="logo" />
            </Link>

            <Navigation />

            {auth.isLoggedIn && (
              <Button
                content="Tweet"
                className="tweet"
                onClick={() => setShowNewTweet(true)}
              />
            )}
          </div>

          {auth.isLoggedIn && (
            <AccountMenu />
          )}
        </div>
      </div>
    </>
  );
};
export default MainHeader;
