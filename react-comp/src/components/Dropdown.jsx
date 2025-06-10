import {useState, useEffect} from "react";
import {IoIosArrowDown} from "react-icons/io";
import Panel from "./Panel";

function Dropdown({options, value, onChange}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      console.log(event.target);
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value ? value.label : "Select..."}
        <IoIosArrowDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}
export default Dropdown;
