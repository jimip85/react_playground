import logo from "./logo.svg";
import Child from "./Child.js";
import "./App.css";
import { useState } from "react";

function App() {
  const date = new Date();

  return (
    <div className="flex">
      <h1>Current Time:</h1>
      <Child message={date.toLocaleTimeString()} />
    </div>
  );
}

export default App;
