import React from "react";
import "./App.css";
import { PersonDetail } from "./components/PersonDetail";
import { Card } from "./components/Card";

function App() {
  const names = [
    { name: "Max", age: "20" },
    { name: "Alex", age: "27" },
  ];
  return (
    <Card className="App">
      <PersonDetail name={names[0].name} />
      <PersonDetail name={names[1].name} />
    </Card>
  );
}

export default App;
