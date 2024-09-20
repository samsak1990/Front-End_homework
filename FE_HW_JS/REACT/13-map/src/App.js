import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import { getUnicID } from "./utils/generateUnicID";

export default function App() {
  const [counter, setCounter] = useState("0");
  const [loging, setLog] = useState([]);

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

  function handleIncrementCounter(e) {
    setLog(() => {
      return [
        <li key={getUnicID()}>Click on - {e.target.innerHTML}</li>,
        ...loging,
      ];
    });
    setCounter(+counter + 1);
  }

  return (
    <div className="App">
      <Counter totalNum={counter} />
      {generateArrayButtons()}
      <ul>{loging}</ul>
    </div>
  );
}
