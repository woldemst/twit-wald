import { useState } from "react";
import "./Input.scss";
import { validate } from "../util/validators";

const Input = (props) => {
  const [value, setValue] =useState(props.initialValue || '')
  const [isValid, setIsValid] = useState(false)

  // const [email, setEmail] = useState('')

  const changeHandler = (event) => {
    setValue(event.target.value);
    // setIsValid(validate(event.target.value, props.validators))
    // console.log(name);
  };

  return (
    <>
      <div className="input-container">
        <label htmlFor={props.id}>{props.label}</label> 
        <input
          // placeholder={props.placeholder}
          id={props.id}
          type="text"
          // name={name}
          onChange={changeHandler}
        />
      </div>
      ;
    </>
  );
};

export default Input;
