import { useState } from "react";
import "./Input.scss";

const Input = (props) => {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value);
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
          name={name}
          onChange={handleNameChange}
        />
      </div>
      ;
    </>
  );
};

export default Input;
