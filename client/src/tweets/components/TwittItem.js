import Button from "../../shared/FormElements/Button";
import Avatar from "../../shared/UIElements/Avatar";
import "./TwittItem.scss";

const TwittItem = (props) => {
  return (
    <>
      <div className="twitt-container">
        <div className="creator-image">
          <Avatar image={props.creatorImage} className="tweet-creator" />
        </div>
        <div className="twitt-content">
          <div className="twitt-header">
            <div className="twitt-creator">
              <div className="creator-info">
                <span className="name">{props.creatorName}</span>
                <span className="nickname">{props.creatorNickname}</span>
                <span className="date">*{props.posted}</span>
              </div>
            </div>
            <Button 
                className='edit'
                content={
                    <>
                        <span></span>
                        <span></span>
                        <span></span>
                    
                    </>
                }

            />
          </div>
          <div className="twitt-description__container">
            {props.description}
          </div>
          <div className="twitt-image__container">
            <img src={props.imageUrl} alt="" className="twitt-image" />
          </div>
          <div className="twitt-actions__container">
            <div className="twit-actions__content">
              <div className="comments">*</div>
              <div className="retwitt">*</div>
              <div className="likes">*</div>
              <div className="share">*</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwittItem;
