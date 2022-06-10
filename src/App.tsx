import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PersonDetail } from "./components/PersonDetail";

function App() {
  const names = [
    { name: "Max", age: "20" },
    { name: "Alex", age: "27" },
  ];
  return (
    <div className="App">
      <PersonDetail name={names[0].name} />
      <PersonDetail name={names[1].name} />
    </div>
  );
}

export default App;
