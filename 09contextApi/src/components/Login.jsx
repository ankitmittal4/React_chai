import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const { setUser } = useContext(UserContext); //usecontext

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password, number }); //to send data
    // console.log("Form Submitted");
  };
  return (
    <div>
      <h2 className="text-4xl mb-5">Login</h2>
      <input
        className="text-2xl p-2 border"
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        className="text-2xl p-2 border"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        className="text-2xl p-2 border"
        type="number"
        placeholder="Number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      <br />
      <button className="text-2xl outline p-2 rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
