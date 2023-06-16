import { Link } from "react-router-dom";
import Button from "../../shared/FormElements/Button";
import Avatar from "../../shared/UIElements/Avatar";
import "./TweetItem.scss";
import Dropdown from "../../shared/FormElements/Dropdown";
import { useState } from "react";

import commentsIcon from '../../images/chat.svg'
import retweetIcon from '../../images/retweet.svg'


const TweetItem = (props) => {
  const options = [
    { value: "option1", label: "Delete" },
    { value: "option2", label: "Edit" },
    { value: "option3", label: "Pin to your profile" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };
  return (
    <>
      <div className="tweet-container">
        {/* <a href="" className={`tweet-${props.id}`}></a> */}
        <div className="creator-image">
          <Link to="/profile" >
            <Avatar image={props.creatorImage} className="tweet-creator" />
          </Link>
        </div>
        <div className="tweet-content">
          <div className="tweet-header">
            <div className="tweet-creator">
              <div className="creator-info">
                <Link to="/profile">
                  <span className="name">{props.creatorName}</span>
                </Link>
                <span className="nickname">{props.creatorNickname}</span>
                <span className="date">*{props.posted}</span>
              </div>
            </div>
            <Button
              className="edit"
              content={
                <>
                  <Dropdown options={options} onSelect={handleOptionSelect} />
                </>
              }
            />
          </div>
          <div className="tweet-description__container">
            {props.description}
          </div>
          <div className="tweet-image__container">
            <img src={props.imageUrl} alt="" className="tweet-image" />
          </div>
          <div className="tweet-actions__container">
            <div className="twit-actions__content">
              
              <div className="comments"><img src={commentsIcon} alt="" /></div>
              <div className="retweet"><img src={retweetIcon} alt="" /></div>
              <div className="likes">*</div>
              <div className="share">*</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetItem;
