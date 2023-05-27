import { useState } from "react";

import Button from "../FormElements/Button";
import Modal from "../UIElements/Modal";
import Auth from "../../user/pages/Auth";

const Navigation = (props) => {
  const [showAuthForm, setShowAuthForm] = useState(false);

  const openAuthHandler = () => setShowAuthForm(true);

  const closeAuthHandler = () => setShowAuthForm(false);

  return (
    <>
      <Modal
        show={showAuthForm}
        onCancel={closeAuthHandler}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        header={<Button content="✕" className="close" onClick={closeAuthHandler} />}
      >
        <Auth />
      </Modal>

      <div className="navigation-container">
          <Button onClick={openAuthHandler} content="Log in" />
      </div>
    </>
  );
};

export default Navigation;
