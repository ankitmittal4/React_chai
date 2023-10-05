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

  return <></>;
}

export default App;
