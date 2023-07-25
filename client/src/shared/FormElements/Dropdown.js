import React, { useState } from "react";
import "./Dropdown.scss";
import Button from "./Button";

const Dropdown = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {  
    setSelectedOption(option);
    setIsOpen(false);
    props.onSelect(option);
  };

  return (
    <div className={`dropdown dropdown-${props.className}`}>
      {/* // to toggle a dropdown */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        <>
          <span></span>
          <span></span>
          <span></span>
        </>
      </div>

      {isOpen && (
        <ul className="dropdown-options">
          {props.options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              className="dropdown-option"
            >
              <Button
                content={option.label}
                className="dropdown"
                onClick={option.onClick}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
