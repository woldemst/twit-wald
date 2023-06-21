import { useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import Button from "../../shared/FormElements/Button";
import Avatar from "../../shared/UIElements/Avatar";
import Dropdown from "../../shared/FormElements/Dropdown";

import commentsIcon from "../../images/chat.svg";
import retweetIcon from "../../images/retweet.svg";
import likeIcon from "../../images/like.svg";
import uploadIcon from "../../images/upload.svg";

import "./TweetItem.scss";
// import Card from "../../shared/UIElements/Card";


const TweetItem = (props) => {
  const options = [
    { value: "option1", label: "Delete" },
    { value: "option2", label: "Edit" },
    { value: "option3", label: "Pin to your profile" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const tweetId = useParams().tweetId;
  
  // const identifiedTweet = DUMMY_TWITTS.find((t) => t.id === tweetId);


  // if (!identifiedTweet){
  //   return(
  //     <div className="center">
  //       <Card>
  //         <h2>Could not find </h2>
  //       </Card>
  //     </div>
  //   )
  // }

  return (
    <>
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
