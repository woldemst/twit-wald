import { useEffect, useReducer } from "react";

import { validate } from "../util/validators";

import "./Input.scss";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput, props.initialValue]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };
  
  const renderInputElement = () => {
    switch (props.element) {
      case "input":
        return (
          <input
            id={props.id}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
          />
        );
      case "textarea":
        return (
          <textarea
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            rows={props.rows || 3}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
          />
        );
      case "select":
        return (
          <select
            id={props.id}
            name={props.name}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
          >
            {props.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  const charCount = inputState.value.length;
  const maxChars = props.maxChars; // Change the maximum character limit here

  return (
    <>
      <div
        className={`form-control ${props.element} form-control-${
          props.className
        } ${
          !inputState.isValid && inputState.isTouched && "form-control--invalid"
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        {/* {element} */}
        {renderInputElement()}
        {props.maxChars && (
          <div className="char-counter__container">
            <div className="counter">
              {charCount} / {maxChars}
            </div>
          </div>
        )}
      </div>
      {!inputState.isValid && inputState.isTouched && (
        <p className="error-text">{props.errorText}</p>
      )}
      ;
    </>
  );
};

export default Input;
