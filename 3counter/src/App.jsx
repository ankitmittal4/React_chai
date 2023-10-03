import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  const incValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    if (counter >= 10) {
      alert("Reached Max limit");
      setCounter(10);
    }
  };
  const decValue = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      alert("Reached Min limit");
      setCounter(0);
    }
    // console.log("counter Decreased", counter);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={incValue}>Increase Value</button>
      <button onClick={decValue}>Decrease Value</button>
    </>
  );
}

export default App;
