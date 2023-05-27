import { useState } from "react";
import "./Input.scss";


const Input = (props) => {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value);
    // console.log(name);
  };

  return <input placeholder={props.placeholder} type="text" name={name} onChange={handleNameChange} />;
};

export default Input;
