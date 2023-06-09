import { useReducer } from "react";
import "./Input.scss";
import { validate } from "../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state, 
        isTouched: true
      }
    default:
      return state;
  }
};

const Input = (props) => {

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({type: 'TOUCH'})
  }

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        name={props.name}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <>
      <div
        className={`form-control ${
          !inputState.isValid && inputState.isTouched && "form-control--invalid"
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        {element}
      </div>
      {!inputState.isValid && inputState.isTouched && <p className="error-text">{props.errorText}</p>};
    </>
  );
};

export default Input;
