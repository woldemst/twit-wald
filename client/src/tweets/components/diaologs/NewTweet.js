import Input from "../../../shared/FormElements/Input";
import Card from "../../../shared/UIElements/Card";
import { VALIDATOR_REQUIRE } from "../../../shared/util/validators";

import "./NewTweet.scss";

const NewTweet = () => {
  return (
    <>
    <Card className='new-tweet-card'>
      <form className="tweet-form">
        <Input
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
        />
      </form>
    </Card>
    </>
  );
};

export default NewTweet;
