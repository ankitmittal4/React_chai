import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [counter, setCounter] = useState(1);
  // // const [multiplyCounter, setMultiplyCounter] = useState(1);
  // const multiplyCounter = counter * 5;

  // const multiplyBtn = () => {
  //   // setMultiplyCounter(counter * 5);
  //   setCounter(counter + 1);
  // };
  // return (
  //   <>
  //     <h1>Counter : {counter}</h1>
  //     <button onClick={multiplyBtn}>Click To Multiply by 5</button>
  //     <h1>Counter after multiplication: {multiplyCounter}</h1>
  //   </>
  // );

  console.log("App Re-rendered : ", Math.random());
  // const [counter, setCounter] = useState({
  //   counter: 1,
  // });
  // const [counter, setCounter] = useState(1);
  // const [counter, setCounter] = useState([1, 2, 3]);
  // const [counter, setCounter] = useState("ankit");
  const [counter, setCounter] = useState(1);

  const click = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button onClick={click}>Click To Multiply by 5</button>
    </>
  );
}

export default App;
