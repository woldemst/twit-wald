import { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/UIElements/Avatar";
import Dropdown from "../../shared/FormElements/Dropdown";
import UpdateTweet from "./diaologs/UpdateTweet";
import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/UIElements/Modal";

import commentsIcon from "../../images/chat.svg";
import retweetIcon from "../../images/retweet.svg";
import likeIcon from "../../images/like.svg";
import uploadIcon from "../../images/upload.svg";

import "./TweetItem.scss";

const TweetItem = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "option1", label: "Delete", onClick: () => {console.log('Delete function');} },
    { value: "option2", label: "Edit", onClick: () => setShowEditForm(true) },
    { value: "option3", label: "Pin to your profile", onClick: () => {console.log('Pin to profile');}},
  ];


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Modal
        show={showEditForm}
        contentClass="edit-item__modal-content"
        header={
          <div className="btn-container">
            <div className="close-btn">
              <Button
                content="✕"
                className="close"
                onClick={() => setShowEditForm(false)}
              />
            </div>
            <div className="save-btn">
              <Button content="Save" className="save-edits" />
            </div>
          </div>
        }
      >
        <UpdateTweet tweetId={props.id} />
      </Modal>

      <div className="tweet-container">
        <div className="creator-image">
          <Link to={`/${props.creatorId}`}>
            <Avatar image={props.creatorImage} className="tweet-creator" />
          </Link>
        </div>
        <div className="tweet-content">
          <div className="tweet-header">
            <div className="tweet-creator">
              <div className="creator-info">
                <Link to={`/${props.creatorId}`}>
                  <span className="name">{props.creatorName}</span>
                </Link>
                <span className="nickname">{props.creatorNickname}</span>
                <span className="date">*{props.posted}</span>
              </div>
            </div>
            <Dropdown options={options} onSelect={handleOptionSelect} />
          </div>
          <Link
            // to={`/${props.creatorId}/status/${props.id}`}
            to={`/${props.creatorId}/status/${props.id}`}
            className={`tweet-link tweet-${props.id}`}
          >
            <div className="tweet-description__container">
              {props.description}
            </div>
            <div className="tweet-image__container">
              <img src={props.imageUrl} alt="" className="tweet-image" />
            </div>
          </Link>

          <div className="tweet-actions__container">
            <div className="twit-actions__content">
              <Button
                className="icon comments"
                content={<img src={commentsIcon} alt="" />}
              />
              <Button
                className="icon retweet"
                content={<img src={retweetIcon} alt="" />}
              />
              <Button
                className="icon likes"
                content={<img src={likeIcon} alt="" />}
              />
              <Button
                className="icon share"
                content={<img src={uploadIcon} alt="" />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetItem;
