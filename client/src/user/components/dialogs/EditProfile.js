import Input from "../../../shared/FormElements/Input";
import Card from "../../../shared/UIElements/Card";
import { useForm } from "../../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH } from "../../../shared/util/validators";

const DUMMY_USERS = [
  {
    id: "profile",
    name: "Max Schwarz",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "That's my official page",
    location: "Germany",
    link: "https://github.com/woldemst",
    tweets: 3,
  },
  {
    id: "u2",
    name: "John Doe",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "That's my official page",
    location: "Germany",
    link: "https://github.com/johndoe",
    tweets: 6,
  },
  {
    id: "u3",
    name: "Jane Smith",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "That's my official page",
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
      bio: {
        value: identifiedUser.bio,
        isValid: true,
      },
      location: {
        value: identifiedUser.country,
        isValid: true,
      },
      link: {
        value: identifiedUser.link,
        isValid: true,
      },
    },
    true
  );

    console.log(formState)
  return (
    <>
      <Card className="edit-profile">
        <form className="edit-form">
          <Input
            id="name"
            element="input"
            type="text"
            name="editUserName"
            label="Name"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(4)]}
            errorText="Please enter a valid user name"
            initialValue={formState.inputs.name.value}
            initialValid={formState.inputs.name.isValid}
          />

          <Input
            element="input"
            type="text"
            id="editBio"
            name="editBio"
            label="Bio"
            onInput={inputHandler}
            errorText="Please enter a valid text"
            intialValue={formState.inputs.bio.value}
            initialValid={formState.inputs.bio.isValid}

          />

          <Input
            element="input"
            type="text"
            id="editLocation"
            name="editLocation"
            label="Location"
            onInput={inputHandler}
            errorText="Please enter a valid Location"
            initialValue={formState.inputs.location.value}
            initialValid={formState.inputs.location.isValid}

          />

          <Input
            element="input"
            type="text"
            id="editWebsite"
            name="editWebsite"
            label="Website"
            onInput={inputHandler}
            errorText="Please enter a valid Webseite"
            initialValue={formState.inputs.link.value}
            initialValid={formState.inputs.link.isValid}

          />
        </form>
      </Card>
    </>
  );
};

export default EditProfile;
