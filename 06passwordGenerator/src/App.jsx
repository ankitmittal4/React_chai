import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [btnColor, setBtnColor] = useState();
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()-_+={}:;,.";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); //gives random index
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  // passwordGenerator();
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 4);
    window.navigator.clipboard.writeText(password);
    setBtnColor("rgb(91, 91, 255)");
    setTimeout(() => {
      setBtnColor("blue");
    }, 85);
  }, [password]);

  return (
    <>
      <div className="w-full mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 text-2xl box mt-20">
        <h1 className="text-white text-center my-7 mt-4 text-3xl">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-9">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 pb-2 "
            style={{ backgroundColor: btnColor }}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 text-2xl mr-9">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              ref={passwordRef}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1 text-2xl mr-9">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              className="cursor-pointer w-5 h-5"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1 text-2xl">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className="cursor-pointer w-5 h-5"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
