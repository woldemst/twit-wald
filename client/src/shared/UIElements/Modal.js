import { CSSTransition } from "react-transition-group";
import { useEffect } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";

import "./Modal.scss";

const ModalOverlay = (props) => {
  useEffect(() => {
    if (props.show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [props.show]);
   
  const content = (
    <div className={`modal modal-${props.modalClassName}`} >
      <div className="modal-container">
        <header className={`modal_header ${props.headerClassName}`}>
          {props.header}
        </header>
        <div className={`modal_content ${props.contentClass}`}>
          {props.children}
        </div>
        <div className={`modal_footer ${props.footerClass}`}>
          {props.footer}
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {

  return (
    <>
      {props.show && <Backdrop onClick={props.onClose} />}
      <CSSTransition in={props.show} timeout={0} unmountOnExit className="modal">
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
