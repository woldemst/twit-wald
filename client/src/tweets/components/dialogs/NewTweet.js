import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { useForm } from "../../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH } from "../../../shared/util/validators";

import { AuthContext } from "../../../shared/context/auth-context";
import Input from "../../../shared/FormElements/Input";
import Avatar from "../../../shared/UIElements/Avatar";
import Card from "../../../shared/UIElements/Card";
import Button from "../../../shared/FormElements/Button";

import globusIcon from '../../../images/globus.svg'
import imageIcon from '../../../images/image.svg'
import gifIcon from '../../../images/gif.svg'
import chooseIcon from '../../../images/choose.svg'
import smileIcon from '../../../images/smile.svg'
import reminderIcon from '../../../images/reminder.svg'
import locationIcon from '../../../images/location.svg'

import "./NewTweet.scss";

const NewTweet = () => {
  const auth = useContext(AuthContext)

  const [fetchedUsers, setFetchedUsers] = useState([])
  

  useEffect(()=> {

    //function for fetching al of the user from backend
    const fetchUsers = async () => {
      try {
          const response = await axios.get('http://localhost:8000/api/users')
          setFetchedUsers(response.data)

      } catch (err) {
        console.log('Error fetching users', err);
      }
    }

    fetchUsers()
  }, [])

  const identifiedUser = fetchedUsers.find(u => u._id === auth.userId)

  const [formState, inputHandler] = useForm({
    newTweetContent: {
      value: "",
      isValid: false,
      },
    },
    false
  );

  const tweetSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(formState.inputs);
  };

  return (
    <>
      <Card className="new-tweet-card">
        <div className="new-tweet-card-container">

          <div className="tweet-form__container">
            <form className="tweet-form" onSubmit={tweetSubmitHandler}>

            <div className="container">
              <Avatar image={identifiedUser?.image} width="60px" height="60px" className="new-tweet" />

              <Input
                id="newTweetContent"
                element="textarea"
                type="text"
                placeholder="What's heppening?!"
                className="new-tweet-input"
                validators={[VALIDATOR_MINLENGTH(1)]}
                onInput={inputHandler}
                value={formState.inputs.newTweetContent.value}
                valid={formState.inputs.newTweetContent.isValid}
              />
            </div>


              <div className="replay__container">
                <div className="icon"><img src={globusIcon} alt="" /></div>
                <div className="select-replier">Who can reply ?</div>
              </div>
              <div className="tweet-footer__container">
                <div className="tweet-options">
                  <div className="image-icon icon"><img src={imageIcon} alt="" /></div>
                  <div className="gif-icon icon"><img src={gifIcon} alt="" /></div>
                  <div className="choice-icon icon"><img src={chooseIcon} alt="" /></div>
                  <div className="emoji-icon icon"><img src={smileIcon} alt="" /></div>
                  <div className="sheduld-icon icon"><img src={reminderIcon} alt="" /></div>
                  <div className="location-icon icon"><img src={locationIcon} alt="" /></div>
                </div>
                <div className="tweet-btn">
                  <Button
                    content="Tweet"
                    className="tweet"
                    disabled={!formState.isValid}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </>
  );
};

export default NewTweet;
