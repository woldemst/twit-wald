import { useCallback, useReducer } from "react";

import { VALIDATOR_MINLENGTH } from "../../../shared/util/validators";
import Input from "../../../shared/FormElements/Input";
import Avatar from "../../../shared/UIElements/Avatar";
import Card from "../../../shared/UIElements/Card";
import { USERS } from "../../../user/pages/UserProfile";
import Button from "../../../shared/FormElements/Button";

import "./NewTweet.scss";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewTweet = () => {
  const avatar = USERS.map((user) => user.image);

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {  
      tweetDescription: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const tweetSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formState.inputs);
  }

  return (
    <>
      <Card className="new-tweet-card">
        <div className="new-tweet-card-container">
          <Avatar image={avatar} className="new-tweet" />

          <div className="tweet-form__container">
            <form className="tweet-form" onSubmit={tweetSubmitHandler}>
              {/* <select name="circle">
                <option value='01' disabled selected>
                  Everyone
                </option>
                <option value="02">Twitter Circle</option>
              </select> */}

              <Input
                id="tweetDescription"
                element="input"
                type="text"
                placeholder="What's heppening?!"
                className="new-tweet-input"
                validators={[VALIDATOR_MINLENGTH(4)]}
                onInput={inputHandler}
              />

              <div className="replay__container">
                <div className="icon">*</div>
                <div className="select-replier">Who can reply ?</div>
              </div>
              <div className="tweet-footer__container">
                <div className="tweet-options">
                  <div className="image-icon icon">*</div>
                  <div className="gif-icon icon">*</div>
                  <div className="choice-icon icon">*</div>
                  <div className="emoji-icon icon">*</div>
                  <div className="sheduld-icon icon">*</div>
                  <div className="location-icon icon">*</div>
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
