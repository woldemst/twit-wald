import { useState } from "react";

import Button from "../FormElements/Button";
import Modal from "../UIElements/Modal";
import Auth from '../../user/pages/Auth'

import "./LogingWindow.scss";

const LogingWindow = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  //   const [isLogingMode, setIsLogingMode] = useState(false);

  return (
    <>
      <div className="logging-banner_container">
        <div className="banner-container_inner">
          <h2 className="logging-headline">New to TwitWald ?</h2>
          <p>Sign up now to get your own personalized timeline!</p>

          <Modal
            show={showAuthForm}
            onClose={() => setShowAuthForm(false)}
            contentClass="place-item__modal-content"
            header={
              <Button
                content="✕"
                className="close"
                onClick={() => setShowAuthForm(false)}
              />
            }
          >
            <Auth />
          </Modal>
          <Button
            onClick={() => setShowAuthForm(true)}
            className="log"
            content="Create an account"
          />

          <p>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
        </div>
      </div>
      <p className="terms-container">
        Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
        More © 2023 X Corp.
      </p>
    </>
  );
};
export default LogingWindow;
