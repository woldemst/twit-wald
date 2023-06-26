import { VALIDATOR_MINLENGTH } from "../../../shared/util/validators";
import { useForm } from "../../../shared/hooks/form-hook";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";
import image from "../../../images/avatar.jpeg";

import "./UpdateTweet.scss";

const DUMMY_TWITTS = [
  {
    id: "t1",
    creator: {
      id: "profile",
      image: image,
      name: "Waldemar Weinert",
      nickname: "@woldemst",
    },
    postedDate: "Jun 2",
    content:
      "It's just one more day. More work, more experience. More experience, more money",
    imageUrl:
      "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80",
  },
  {
    id: "t2",
    creator: {
      id: "u2",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "John Doe",
      nickname: "@johndoe",
    },
    postedDate: "May 28",
    content: "Enjoying a beautiful day at the beach",
    imageUrl:
      "https://images.unsplash.com/photo-1685665535340-c3b6d390a15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const UpdateTweet = (props) => {
  const identifiedTweet = DUMMY_TWITTS.find(t => t.id === props.tweetId);

  const [formState, inputHandler] = useForm(
    {
      content: {
        value: identifiedTweet.content,
        isValid: true,
      },
    },
    true
  );

  const tweetSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    console.log(formState.inputs.content.value);
  };

  
  // console.log(formState);
  return (
    <>
      <form className="update-tweet__form" onSubmit={tweetSubmitHandler}>
        <Input
          id="content"
          element="input"
          type="text"
          // label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
          initialValue={formState.inputs.content.value}
          initialValid={formState.inputs.content.isValid}
        />

        <Button
          type="submit"
          disabled={!formState.isValid}
          content="Update tweet"
        />
      </form>
    </>
  );
};

export default UpdateTweet;
