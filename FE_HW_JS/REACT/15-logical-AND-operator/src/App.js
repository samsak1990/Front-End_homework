import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Reset from "./components/Reset";
import { getUnicID } from "./utils/generateUnicID";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [loging, setLog] = useState([]);

  function handleReset() {
    setCounter(0);
  }

  function handleIncrementCounter(e) {
    setLog(() => {
      return [
        <li key={getUnicID()}>Click on - {e.target.innerHTML}</li>,
        ...loging,
      ];
    });
    setCounter(+counter + 1);
  }

  function generateArrayButtons() {
    const array = [];
    for (let i = 0; i <= 5; i++) {
      array.push(
        <Button
          key={"button-" + i}
          numberBtn={i}
          handleClick={handleIncrementCounter}
        />
      );
    }
    return array;
  }

  return (
    <div className="App">
      <Counter totalNum={counter} />
      {generateArrayButtons()}
      <Reset handleReset={handleReset} counter={counter} />
      <ul>{loging}</ul>
    </div>
  );
}
