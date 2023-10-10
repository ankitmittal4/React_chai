import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1 className="bg-green-500 p-5 text-center">React Router</h1>
    </>
  );
}

export default App;
