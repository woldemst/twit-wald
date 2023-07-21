import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../shared/context/auth-context";

import Button from "../../shared/FormElements/Button";
import Avatar from "../../shared/UIElements/Avatar";
import Modal from "../../shared/UIElements/Modal";
import EditProfile from "./dialogs/EditProfile";

import arrowLeft from "../../images/arrow-left.svg";
import locationIcon from "../../images/location.svg";
import linkIcon from "../../images/link.svg";
import calendarIcon from "../../images/calendar.svg";
import bg from "../../images/bg.jpg";

import "./UserItem.scss";

const UserItem = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const auth = useContext(AuthContext);

  let linkText = props.link.replace(/^https?:\/\//, "");

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
        <EditProfile userId={props.id} />
      </Modal>

      <div className="user-profile">
        <div className="user-profile__content">
          <div className="user-profile__header">
            <div className="back-btn__container">
              <Button
                content={
                  <>
                    <img src={arrowLeft} alt="" />
                  </>
                }
                className="back"
                onClick={handleGoBack}
              />
            </div>

            <div className="header__user-info">
              <h3>{props.name}</h3>
              <p className="tweet-count">
                {props.tweetCount} {props.tweetCount === 1 ? "tweet" : "tweets"}
              </p>
            </div>
          </div>
          <div className="profile-background__container">
            <div className="profile-background">
              <img src={bg} alt="" className="bg" />
            </div>
          </div>

          <div className="user-profile__info">
            <div className="image-btn__container">
              <div className="user-content">
                <div className="user-profile__image">
                  <Avatar image={props.image} alt={props.name} />
                </div>

                <div className="profile-name__container">
                  <div className="profile-name">
                    <h3>{props.name}</h3>
                  </div>
                  <div className="nick-name">
                    <p>@{props.nickname}</p>
                  </div>
                </div>
              </div>

              {/* show just on the userpage  */}
              {/* {auth.isLoggedIn && ( */}
                <div className="btn-container">
                  <Button
                    content="Edit profile"
                    className="edit-profile"
                    onClick={() => setShowEditForm(true)}
                  />
                </div>
              {/* )} */}
            </div>

            <div className="bio-container">
              <p className="bio-content">{props.bio}</p>
            </div>
            <div className="registration-info">
              <div className="location-container">
                <div className="location-icon">
                  <img src={locationIcon} alt="Location" />
                </div>
                <div className="location">{props.location}</div>
              </div>
              <div className="link-container">
                <div className="link-icon">
                  <img src={linkIcon} alt="Link" />
                </div>
                <a href={props.link} className="link">
                  {linkText}
                </a>
              </div>
              <div className="date-container">
                <div className="date-icon">
                  <img src={calendarIcon} alt="" />
                </div>
                <div className="date">Joined {props.joined}</div>
              </div>
            </div>
            <div className="folowers-info">
              <div className="col following-count">
                <span className="count">{props.following}</span>
                <p className="text">Following</p>
              </div>
              <div className="col followers-count">
                <span className="count">{props.followers}</span>
                <p className="text">Followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
