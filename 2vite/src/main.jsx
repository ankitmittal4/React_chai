import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
function MyApp() {
  return (
    <>
      <h1>Custom React !!!</h1>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
