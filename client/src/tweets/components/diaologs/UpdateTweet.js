import { useParams } from "react-router-dom";
import Input from "../../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../../shared/util/validators";
import Button from "../../../shared/FormElements/Button";

const UpdateTweet = () => {
  const DUMMY_TWITTS = [
    {
      id: "t1",
      creator: {
        id: "u1",
        image: image,
        name: "Waldemar Weinert",
        nickname: "@woldemst",
      },
      postedDate: "Jun 2",
      description:
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
      description: "Enjoying a beautiful day at the beach",
      imageUrl:
        "https://images.unsplash.com/photo-1685665535340-c3b6d390a15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const tweetId = useParams().tweetId;
  const identifiedTweet = DUMMY_TWITTS.find((t) => t.id === tweetId);

  if (!identifiedTweet) {
    return (
      <>
        <h2>Could not find tweet</h2>
      </>
    );
  }
  return (
    <>
      <form>
        <Input
          id="tweetDescription"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          // onInput{()=>{}}
          value={identifiedTweet.description}
          valid="true"
        />

        <Button type="submit" disabled={true} content='Update tweet' />
      </form>
    </>
  );
};

export default UpdateTweet;
