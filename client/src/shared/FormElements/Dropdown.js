import React, { useState } from "react";
import "./Dropdown.scss";
import Button from "./Button";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className={`dropdown dropdown-`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        }
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              className="dropdown-option"
            >
              <Button content={option.label} className='dropdown' />
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
