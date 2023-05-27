import { useState } from "react";

import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";

import "./Auth.scss";

const Auth = (props) => {
  const [useEmail, setUseEmail] = useState(false);

  const usePhoneHandler = () => setUseEmail(true);

  const useEmailHandler = () => setUseEmail(false);

  const authSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Card className="authentication">
        <h1 className="auth-headline">Create an account</h1>

        <form className="auth-form" onSubmit={authSubmitHandler}>
          <Input
            type="text"
            id="name"
            name="name"
            label="Name"
            placeholder="Name"
          />

          {useEmail && (
            <div className="use-phone_container">
              <Input type="tel" id="phone" name="phone" placeholder="Phone" />
              <Button
                className="input-change"
                content="Use email instead"
                onClick={useEmailHandler}
              />
            </div>
          )}

          {!useEmail && (
            <div className="use-email_container">
              <Input type="email" id="email" name="email" placeholder="Email" />
              <Button
                className="input-change"
                content="Use phone instead"
                onClick={usePhoneHandler}
              />
            </div>
          )}

          <Button className="auth" content="Sign up" />
        </form>
      </Card>
    </>
  );
};

export default Auth;
