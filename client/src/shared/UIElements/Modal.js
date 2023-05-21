import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./Modal.scss";

const ModalOverlay = (props) => {
  const content = (
    
    <div className="modal-overlay">
      <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal_header ${props.headerClassName}`}>
          <h2>{props.header}</h2>
        </header>
        <div className={`modal_content ${props.contentClassName}`}>
          {props.children}
        </div>
        <div className={`modal_footer ${props.footer}`}>
          {props.footer}
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = props => {
    
  return (

    <CSSTransition
        in={props.show}
        mountOnEnter
        mountOnExit
        timeout={300}
        className="modal"
    >
        <ModalOverlay {...props} />
    </CSSTransition>

  );
}

export default Modal;