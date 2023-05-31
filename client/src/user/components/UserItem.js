import Button from "../../shared/FormElements/Button";
import Avatar from "../../shared/UIElements/Avatar";
import arrowLeft from '../../images/arrow-left.svg'
import bg from '../../images/bg.jpg'
import "./UserItem.scss";

const UserItem = (props) => {
  // {console.log(props)}

  return (
    <>
      <div className="user-profile">
        <div className="user-profile__content">

          <div className="user-profile__header">

            <div className="back-btn__container">
              <Button content="<" className="back" />
            </div>

            <div className="header__user-info">
              <h3>{props.name}</h3>
              <p className="tweet-count">{props.tweetCount} {props.tweetCount === 1 ? "tweet" : "tweets"}</p>
            </div>
          </div>
          <div className="profile-background__conteiner">
              <div className="profile-background">
                <img src={bg} alt="" className="bg" />
              </div>
            </div>
          <div className="user-profile__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-profile__info"></div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
