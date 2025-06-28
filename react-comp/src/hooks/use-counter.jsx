import {useState, useEffect} from "react";

function useCounter(initalCount) {
  const [count, setCount] = useState(initalCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    increment,
  };
}

export default useCounter;
