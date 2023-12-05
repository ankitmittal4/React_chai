import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    username: "Ankit",
    age: 20,
    course: "B.Tech",
    contact: 8923409,
  };
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-5">Tailwind</h1>

      <Card username="Steve Smith" />
      <Card username="Rohit Sharma" btnText="Visit Me" />
      <Card username="Jasprit Bumrah" btnText="Explore Me" />
    </>
  );
}

export default App;
