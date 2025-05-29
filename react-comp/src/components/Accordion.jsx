import {MdKeyboardArrowDown} from "react-icons/md";
import {MdKeyboardArrowLeft} from "react-icons/md";

import {useState} from "react";

function Accordion({items}) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-3xl">
        {isExpanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-p p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
