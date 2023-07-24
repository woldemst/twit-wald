import { VALIDATOR_LINK, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../../shared/util/validators";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

import Card from "../../../shared/UIElements/Card";
import Input from "../../../shared/FormElements/Input";
import { useForm } from "../../../shared/hooks/form-hook";

const DUMMY_USERS = [
  {
    id: "profile",
    name: "Max Schwarz",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    textBio: "That's my official page",
    location: "Germany",
    link: "https://github.com/woldemst",
    tweets: 3,
  },
  {
    id: "u2",
    name: "John Doe",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    textBio: "That's my official page",
    location: "Germany",
    link: "https://github.com/johndoe",
    tweets: 6,
  },
  {
    id: "u3",
    name: "Jane Smith",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800",
    textBio: "That's my official page",
    location: "Germany",
    link: "https://github.com/jane",
    tweets: 3,
  },
];


const EditProfile = (props) => {

  const identifiedUser = DUMMY_USERS.find((u) => u.id === props.userId);

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: identifiedUser.name,
        isValid: true,
      },
      textBio: {
        value: identifiedUser.textBio,
        isValid: true,
      },
      location: {
        value: identifiedUser.location,
        isValid: true,
      },
      link: {
        value: identifiedUser.link,
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
            id="name"
            name="name"
            type="text"
            element="input"
            className='border'
            label="Name"
            maxChars='50'
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(4)]}
            errorText="Please enter a valid user name"
            initialValue={formState.inputs.name.value}
            initialValid={formState.inputs.name.isValid}
          />

          <Input
            id="textBio"
            element="input"
            className='border'
            type="text"
            name="textBio"
            label="Bio"
            maxChars='160'
            onInput={inputHandler}
            errorText="Please enter a valid text"
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={formState.inputs.textBio.value}
            initialValid={formState.inputs.textBio.isValid}

          />

          <Input
            id="location"
            element="input"
            className='border'
            type="text"
            name="location"
            label="Location"
            maxChars='30'
            onInput={inputHandler}
            errorText="Please enter a valid Location"
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={formState.inputs.location.value}
            initialValid={formState.inputs.location.isValid}

          />


          <Input
            id="link"
            className='border'
            element="input"
            type="text"
            name="link"
            label="Link"
            maxChars='100'
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
