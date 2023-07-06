import { useState } from "react";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../shared/util/validators";

import Card from "../../../shared/UIElements/Card";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";

import "./Auth.scss";
import { useForm } from "../../../shared/hooks/form-hook";

const Auth = (props) => {
  // const [useEmail, setUseEmail] = useState(false);

  const [isLoginMode, setIsLoginMode] = useState(true)

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <>
      <Card className="authentication">
        <h1 className="auth-headline">Create an account</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLoginMode && (
            <Input
              id="userName"
              type="text"
              element="input"
              className="border"
              name="userName"
              label="Name"
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(5)]}
              initialValue={formState.inputs.userName.value}
              initialValid={formState.inputs.userName.isValid}
            />
          )}


            <div className="use-email_container">
              <Input
                id="email"
                type="email"
                element="input"
                className="border"
                name="email"
                label="Email address"
                validators={[VALIDATOR_EMAIL()]}
                onInput={inputHandler}
                initialValue={formState.inputs.email.value}
                initialValid={formState.inputs.email.isValid}
              />
            </div>

            <div className="passwort-input__container">
              <Input
                id="password"
                type="password"
                element="input"
                className="border"
                name="password"
                label="Password"
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(5)]}
                initialValue={formState.inputs.password.value}
                initialValid={formState.inputs.password.isValid}
              />
            </div>


          <span className="date-of-birth">Date of birth</span>
          <p className="notice">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>

          <Button
            className="auth"
            disabled={!formState.isValid}
            content={<>
              {isLoginMode ? 'Login' : 'Sign up'}
            </>}
          />
          <Button
            className="input-change"
            content={<>Switch to {isLoginMode ? 'Sign up' : 'Login'}</>}
            onClick={switchModeHandler}
          />
        </form>
      </Card>
    </>
  );
};

export default Auth;
