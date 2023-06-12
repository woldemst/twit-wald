import Input from "../../../shared/FormElements/Input";
import Avatar from "../../../shared/UIElements/Avatar";
import Card from "../../../shared/UIElements/Card";
import { VALIDATOR_REQUIRE } from "../../../shared/util/validators";
import { USERS } from "../../../user/pages/UserProfile";

// import Select from "../../../shared/FormElements/Select";
import "./NewTweet.scss";
import Button from "../../../shared/FormElements/Button";

const NewTweet = () => {
  const avatar = USERS.map((user) => user.image);
  return (
    <>
      <Card className="new-tweet-card">

        <Avatar image={avatar} className='new-tweet' />
      
        <div className="tweet-form__container">

          <form className="tweet-form">

            {/* <select name="circle">
              <option value='01' disabled selected>
                Everyone
              </option>
              <option value="02">Twitter Circle</option>
            </select> */}

            <Input
              element="input"
              type="text"
              label="What's heppening?!"
              className='new-tweet-input'
              validators={[VALIDATOR_REQUIRE()]}
            />

            <div className="replay__container">
              <div className="icon">*</div>
              <div className="select-replier">
                Who can reply ? 
              </div>
            </div>
          </form>
        </div>


      </Card>
    </>
  );
};

export default NewTweet;
