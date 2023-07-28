import ReactDOM from "react-dom";
import './Backdrop.scss'

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={`backdrop backdrop-${props.bgClass}`} onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
