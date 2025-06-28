import useCounter from "../hooks/use-counter";
import Button from "../components/Button";

function CounterPage({initalCount}) {
  const {count, increment} = useCounter(initalCount);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}
export default CounterPage;
