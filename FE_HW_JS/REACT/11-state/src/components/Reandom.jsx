import { useState } from "react";
import { generateRandomNumber } from "./utilits/generateRandomNum";

export default function Random({ maxNum }) {
  const [number, setNumber] = useState(generateRandomNumber(maxNum));

  function handleGetRandomNumber() {
    setNumber(generateRandomNumber(maxNum));
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleGetRandomNumber}>Genereate new number</button>
    </div>
  );
}
