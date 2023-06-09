import "./Button.scss";
// import arrowLeft from '../../images/arrow-left.svg'

const Button = (props) => {
  return (
    <button
      className={`button button-${props.className}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.content}
    </button>
  );
};

export default Button;
