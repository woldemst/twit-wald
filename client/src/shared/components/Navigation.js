import { useState } from "react";

import Button from "../FormElements/Button";
import Modal from "../UIElements/Modal";
import Auth from "../../user/pages/Auth";

const Navigation = (props) => {
  // const [showButton, setShowButton] = useEffect(false)
  const [showAuthForm, setShowAuthForm] = useState(false);

  const authHandler = () =>{
    setShowAuthForm(true)
  }

  return (
    <>
      <Modal
        show={showAuthForm}
        // onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button>CLOSE</Button>}
      >
        <Auth />
      </Modal>

      <div className="navigation-container">
        <ul>

          <Button
            onClick={authHandler}
            text="Log in"
          />
        </ul>
      </div>
    </>
  );
};

export default Navigation;
