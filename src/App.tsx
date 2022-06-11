import React from "react";
import "./App.css";
import { PersonDetail } from "./components/Person/PersonDetail";
import { Card } from "./components/UI/Card";
import { NewPerson } from "./components/NewPerson/NewPerson";

const App = () => {
  const persons = [
    { name: "Max", age: "20" },
    { name: "Alex", age: "27" },
  ];

  const addPersonHandler = (person: any) => {
    persons.push(person);
    console.log(persons);
  };
  return (
    <div>
      <NewPerson onAddPersonHandler={addPersonHandler} />
      <Card className="App">
        <PersonDetail name={persons[0].name} />
        <PersonDetail name={persons[1].name} />
      </Card>
    </div>
  );
};

export default App;
