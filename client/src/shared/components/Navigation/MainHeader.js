import { Link } from "react-router-dom";

import logo from "../../../images/logo.svg";
import Navigation from "../Navigation";

import "./MainHeader.scss";
import Button from "../../FormElements/Button";
import Modal from "../../UIElements/Modal";
import { useState } from "react";
import NewTweet from "../../../tweets/components/diaologs/NewTweet";

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
        footerClass='tweet'
        footer={
          <div className="tweet-footer__container">
            <div className="tweet-options">
              <div className="image-icon icon">*</div>
              <div className="gif-icon icon">*</div>
              <div className="choice-icon icon">*</div>
              <div className="emoji-icon icon">*</div>
              <div className="sheduld-icon icon">*</div>
              <div className="location-icon icon">*</div>
            </div>
            <div className="tweet-btn">
              <Button content="Tweet" className="tweet" />
            </div>
          </div>
        }
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
