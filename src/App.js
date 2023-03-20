import logo from "./logo.svg";
import Child from "./Child.js";
import "./App.css";
import { useState } from "react";

function App() {
  const date = new Date();

  return (
    <div>
      <Child message={date.toLocaleTimeString()} />
    </div>
  );
}

export default App;
