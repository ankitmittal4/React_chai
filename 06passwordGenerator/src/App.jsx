import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-3xl justify-center text-white">
        Password Generator
      </div>
    </>
  );
}

export default App;
