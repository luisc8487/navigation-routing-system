import {useReducer} from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  };
};

function CounterPage({initalCount}) {
  // const [count, setCount] = useState(initalCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initalCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch();
  };

  const decrement = () => {
    // setCount(count - 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    // setValueToAdd(value);
  };

  // Add Secction here

  const handleSubmit = (e) => {
    e.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
