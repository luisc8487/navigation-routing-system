import {useState} from "react";

function Dropdown({options, value, onChange}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Close Dropdown
    setIsOpen(false);
    // Option the user clicked on
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>{value ? value.label : "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
export default Dropdown;
