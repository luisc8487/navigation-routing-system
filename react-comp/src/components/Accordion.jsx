import {MdKeyboardArrowDown} from "react-icons/md";
import {MdKeyboardArrowLeft} from "react-icons/md";

import {useState} from "react";

function Accordion({items}) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>
        {isExpanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>
          {icon}
          {item.label}
        </div>
        <div>{isExpanded && <div>{item.content}</div>}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
