import Button from "../../shared/FormElements/Button";
import Avatar from "../../shared/UIElements/Avatar";
import "./TweetItem.scss";

const TweetItem = (props) => {
  return (
    <>
      <div className="tweet-container">
        <div className="creator-image">
          <Avatar image={props.creatorImage} className="tweet-creator" />
        </div>
        <div className="tweet-content">
          <div className="tweet-header">
            <div className="tweet-creator">
              <div className="creator-info">
                <span className="name">{props.creatorName}</span>
                <span className="nickname">{props.creatorNickname}</span>
                <span className="date">*{props.posted}</span>
              </div>
            </div>
            <Button
              className="edit"
              content={
                <>
                  <span></span>
                  <span></span>
                  <span></span>
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
              <div className="comments">*</div>
              <div className="retweet">*</div>
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
