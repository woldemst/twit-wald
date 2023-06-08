import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./Modal.scss";
// import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <div className="modal-container">
        <header className={`modal_header ${props.headerClassName}`}>
          {props.header}
        </header>
        <div className={`modal_content ${props.contentClass}`}>
          {props.children}
        </div>
        <div className={`modal_footer ${props.footer}`}>{props.footer}</div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
    {/* {props.show && <Backdrop onClick={props.onClose} />} */}
    <CSSTransition
      in={props.show}
      // mountOnEnter
      // mountOnExit
      unmountOnExit
      timeout={200}
      className="modal"
    >
      <ModalOverlay {...props} />
    </CSSTransition>
    </>
  );
};

export default Modal;
