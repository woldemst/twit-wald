import { useState } from "react";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../shared/util/validators";

import Card from "../../../shared/UIElements/Card";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";

import "./Auth.scss";
import { useForm } from "../../../shared/hooks/form-hook";

const Auth = (props) => {
  const [useEmail, setUseEmail] = useState(false);

  const [formState, inputHalndler] = useForm({
    userName: {
      value: "",
      isValid: false,
    },
    email: {
      value: "",
      isValid: false,
    },
    phone: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };



  return (
    <>
      <Card className="authentication">
        <h1 className="auth-headline">Create an account</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <Input
            id="userName"
            type="text"
            element="input"
            className="border"
            name="userName"
            label="Name"
            onInput={inputHalndler}
            validators={VALIDATOR_MINLENGTH(5)}
            initialValue={formState.inputs.userName.value}
            initialValid={formState.inputs.userName.isValid}
          />

          {useEmail && (
            <div className="use-phone_container">
              <Input
                id="phone"
                type="tel"
                element="input"
                className="border"
                name="phone"
                label="Phone"
                onInput={inputHalndler}
                initialValue={formState.inputs.phone.value}
                initialValid={formState.inputs.phone.isValid}
              />
              <Button
                className="input-change"
                content="Use email instead"
                onClick={() => setUseEmail(false)}
              />
            </div>
          )}

          {!useEmail && (
            <div className="use-email_container">
              <Input
                id="email"
                type="email"
                element="input"
                className="border"
                name="email"
                label="Email address"
                validators={[VALIDATOR_EMAIL()]}
                onInput={inputHalndler}
                initialValid={formState.inputs.email.isValid}
                initialValue={formState.inputs.email.value}
              />
              <Button
                className="input-change"
                content="Use phone instead"
                onClick={() => setUseEmail(true)}
              />
            </div>
          )}

          <span className="date-of-birth">Date of birth</span>
          <p className="notice">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>

          <Button className="auth" content="Sign up" />
        </form>
      </Card>
    </>
  );
};

export default Auth;
