import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Avatar from "../../shared/UIElements/Avatar";
import Dropdown from "../../shared/FormElements/Dropdown";
import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/UIElements/Modal"
import UpdateTweet from "../components/dialogs/UpdateTweet";

import commentsIcon from "../../images/chat.svg";
import retweetIcon from "../../images/retweet.svg";
import likeIcon from "../../images/like.svg";
import uploadIcon from "../../images/upload.svg";

import "./TweetPage.scss";

const TweetPage = (props) => {
  const navigate = useNavigate();

  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "option1", label: "Delete", onClick: () => {console.log('Delete function');} },
    { value: "option2", label: "Edit", onClick: () => setShowEditForm(true) },
    { value: "option3", label: "Pin to your profile", onClick: () => {console.log('Pin to profile');}},
  ];

  const handleGoBack = () => {
    navigate(-1);
  };

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

      <div className="tweet-page__header">
        <div className="back-btn__container">
          <Button content="<" className="back" onClick={handleGoBack} />
        </div>
        <div className="btn-headline">Tweet</div>
      </div>

      <div className="tweet-page__container">
        <div className="user-info__container">
          <div className="tweet-header">
            <div className="tweet__main-info">
              <div className="creator-image">
                <Link to={`/${props.creatorId}`}>
                  <Avatar
                    image={props.creatorImage}
                    className="tweet-creator"
                  />
                </Link>
              </div>

              <div className="tweet-creator">
                <div className="creator-info">
                  <Link to={`/${props.creatorId}`}>
                    <span className="name">{props.creatorName}</span>
                  </Link>
                  <span className="nickname">{props.creatorNickname}</span>
                </div>
              </div>
            </div>
            <div className="tweet__actions">
              <Button content="Subscribe" className="subscribe" />
              <Dropdown options={options} onSelect={handleOptionSelect} />
            </div>
          </div>
        </div>

        <div className="tweet-page__content">
          <div className="tweet-description__container">
            {props.description}
          </div>
          <div className="tweet-image__container">
            <img src={props.imageUrl} alt="" className="tweet-image" />
          </div>

          <div className="tweet-details__container">
            <div className="row first-row">
              <div className="item time">{props.time}6:43 PM</div>
              <div className="item date">{props.date} · Jun 21, 2023</div>
              <div className="item views">{props.views}3,068 Views</div>
            </div>

            <div className="row second-row">
              <div className="item retweets">{props.retweets}31 Retweets</div>
              <div className="item quotes">{props.quotes}19 Quotes</div>
              <div className="item likes">{props.likes}895 Likes</div>
              <div className="item bookmarks">
                {props.bookmarks}895 Bookmarks
              </div>
            </div>
          </div>
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

export default TweetPage;
