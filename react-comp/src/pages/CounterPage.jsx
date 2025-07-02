import {useState} from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({initalCount}) {
  const {count, setCount} = useState(initalCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div>
        <Button onClick={decrement}>Increment</Button>
        <Button onClick={increment}>Increment</Button>
      </div>

      <form>
        <label>Add a lot!</label>
        <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"/>
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
