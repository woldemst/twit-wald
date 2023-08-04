import axios from "axios";
import { useEffect, useState, useContext } from "react";
import {
  VALIDATOR_LINK,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../shared/util/validators";

import Card from "../../../shared/UIElements/Card";
import Input from "../../../shared/FormElements/Input";
import { useForm } from "../../../shared/hooks/form-hook";
import { AuthContext } from "../../../shared/context/auth-context";

const EditProfile = (props) => {
  const auth = useContext(AuthContext);

  // const [fetchedUsers, setFetchedUsers] = useState([]);

  // useEffect(() => {
  //   //function for fetching  of all users db
  //   //function for fetching al of the user from backend
  //   const fetchUsers = async () => {
  //     try {
  //         const response = await axios.get('http://localhost:8000/api/users')
  //         setFetchedUsers(response.data)
  //         // console.log(response.data);
  //     } catch (err) {
  //       console.log('Fetching users failed', err);
  //     }
  //   }

  //   fetchUsers();
  // }, [auth.userId]);
  // console.log(fetchedUsers);

  // const identifiedUser = fetchedUsers.find((u) => u._id === auth.userId);

  const [formState, inputHandler] = useForm(
    {
      userName: {
        value: props.userName,
        isValid: true,
      },
      bio: {
        value: props.bio,
        isValid: true,
      },
      location: {
        value: props.location,
        isValid: true,
      },
      link: {
        value: props.link,
        isValid: true,
      },
    },
    true
  );

  return (
    <>
      <Card className="edit-profile">
        <form className="edit-form">
          <Input
            id="userName"
            name="userName"
            type="text"
            element="input"
            className="border"
            label="Name"
            maxChars="50"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(4)]}
            errorText="Please enter a valid user name"
            initialValue={formState.inputs.userName.value}
            initialValid={formState.inputs.userName.isValid}
          />

          <Input
            id="bio"
            element="input"
            className="border"
            type="text"
            name="bio"
            label="Bio"
            maxChars="160"
            onInput={inputHandler}
            errorText="Please enter a valid text"
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={formState.inputs.bio.value}
            initialValid={formState.inputs.bio.isValid}
          />

          <Input
            id="location"
            element="input"
            className="border"
            type="text"
            name="location"
            label="Location"
            maxChars="30"
            onInput={inputHandler}
            errorText="Please enter a valid Location"
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={formState.inputs.location.value}
            initialValid={formState.inputs.location.isValid}
          />

          <Input
            id="link"
            className="border"
            element="input"
            type="text"
            name="link"
            label="Link"
            maxChars="100"
            onInput={inputHandler}
            errorText="Please enter a valid Link"
            validators={[VALIDATOR_LINK()]}
            initialValue={formState.inputs.link.value}
            initialValid={formState.inputs.link.isValid}
          />
        </form>
      </Card>
    </>
  );
};

export default EditProfile;
