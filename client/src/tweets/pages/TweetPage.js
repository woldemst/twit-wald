import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Avatar from "../../shared/UIElements/Avatar";
import Dropdown from "../../shared/FormElements/Dropdown";
import Button from "../../shared/FormElements/Button";

import commentsIcon from "../../images/chat.svg";
import retweetIcon from "../../images/retweet.svg";
import likeIcon from "../../images/like.svg";
import uploadIcon from "../../images/upload.svg";

import "./TweetPage.scss";

const TweetPage = (props) => {
  const options = [
    { value: "option1", label: "Delete" },
    { value: "option2", label: "Edit" },
    { value: "option3", label: "Pin to your profile" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
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
                  <Avatar image={props.creatorImage} className="tweet-creator" />
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

              <Button content="Subscribe" className='subscribe' />
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
