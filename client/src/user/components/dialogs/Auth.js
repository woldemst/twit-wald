import { useState } from "react";

import { VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH } from "../../../shared/util/validators";

import Card from "../../../shared/UIElements/Card";
import Input from '../../../shared/FormElements/Input'
import Button from "../../../shared/FormElements/Button";

import "./Auth.scss";

const Auth = (props) => {
  const [useEmail, setUseEmail] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
    console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }


  const usePhoneHandler = () => setUseEmail(true);
  const useEmailHandler = () => setUseEmail(false);


  return (
    <>
      <Card className="authentication">
        <h1 className="auth-headline">Create an account</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            id="userName"
            name="userName"
            label="Name"
            validators={VALIDATOR_MINLENGTH(5)}
            placeholder="Name"
            value={formData.userName}
            onChange={handleChange}

          />

          {useEmail && (
            <div className="use-phone_container">
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
              />
              <Button
                className="input-change"
                content="Use email instead"
                onClick={useEmailHandler}
              />
            </div>
          )}

          {!useEmail && (
            <div className="use-email_container">
              <Input
                type="email"
                placeholder="Email address"
                name="email"
                validators={[VALIDATOR_EMAIL()]}
                id="email"
                onChange={handleChange}
                value={formData.email}

              />
              <Button
                className="input-change"
                content="Use phone instead"
                onClick={usePhoneHandler}
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
