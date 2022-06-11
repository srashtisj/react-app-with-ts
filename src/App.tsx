import { useState } from "react";
import "./App.css";
import { NewPerson } from "./components/NewPerson/NewPerson";
import { Persons } from "./components/Person/Persons";

const DUMMY_PERSON = [
  { name: "Max", age: "20" },
  { name: "Alex", age: "27" },
];

const App = () => {
  const [persons, setPersons] = useState(DUMMY_PERSON);

  const addPersonHandler = (person: any) => {
    setPersons((prevState) => {
      return [person, ...prevState];
    });
  };
  return (
    <div>
      <NewPerson onAddPersonHandler={addPersonHandler} />
      <Persons items={persons} />
    </div>
  );
};

export default App;
