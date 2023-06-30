import { Link } from "react-router-dom";

import logo from "../../../images/logo.svg";
import Navigation from "../Navigation";

import "./MainHeader.scss";
import Button from "../../FormElements/Button";
import Modal from "../../UIElements/Modal";
import { useState } from "react";
import NewTweet from "../../../tweets/components/dialogs/NewTweet";

const Header = () => {
  const [showNewTweet, setShowNewTweet] = useState(false);

  const newTweetHandler = () => {
    setShowNewTweet(true);
  };

  return (
    <>
      <Modal
        show={showNewTweet}
        onClose={() => setShowNewTweet(false)}
        header={
          <Button
            content="✕"
            className="close"
            onClick={() => setShowNewTweet(false)}
          />
        }
        footerClass="tweet"
      >
        <NewTweet />
      </Modal>

      <div className="header-main">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navigation />
        <Button
          content="Tweet"
          className="tweet"
          onClick={() => setShowNewTweet(true)}
        />
      </div>
    </>
  );
};
export default Header;
