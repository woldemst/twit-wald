import { Link } from "react-router-dom";
import Button from "../../shared/FormElements/Button";
import Avatar from "../../shared/UIElements/Avatar";
import "./TweetItem.scss";
import Dropdown from "../../shared/FormElements/Dropdown";
import { useState } from "react";

import commentsIcon from '../../images/chat.svg'
import retweetIcon from '../../images/retweet.svg'
import likeIcon from '../../images/like.svg'
import uploadIcon from '../../images/upload.svg'


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
              <Button className='icon comments' content={<img src={commentsIcon} alt="" />} />
              <Button className='icon retweet' content={<img src={retweetIcon} alt="" />} />
              <Button  className='icon likes' content={<img src={likeIcon} alt="" />} />
              <Button className='icon share' content={<img src={uploadIcon} alt="" />} />


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetItem;
