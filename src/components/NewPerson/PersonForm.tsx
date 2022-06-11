import "./PersonForm.css";
import { ButtonHTMLAttributes, useState } from "react";
import { EventEmitter } from "stream";

export const PersonForm = (props: any) => {
  /** Can add states in two ways */
  //   const [enteredName, setEnteredName] = useState("");
  //   const [enteredAge, setEnteredAge] = useState("");

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAge: "",
  });

  const nameChangeHandler = (event: any) => {
    //setEnteredName(event?.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredName: event?.target.value,
    // })
    setUserInput((prevState: any) => {
      return { ...prevState, enteredName: event?.target.value };
    });
  };

  const ageChangeHandler = (event: any) => {
    //setEnteredAge(event?.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAge: event?.target.value,
    // });

    setUserInput((prevState: any) => {
      return { ...prevState, enteredAge: event?.target.value };
    });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const personData = {
      name: userInput.enteredName,
      age: userInput.enteredAge,
    };

    //console.log(personData);
    props.onSavePersonData(personData);

    setUserInput({
      enteredName: "",
      enteredAge: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={userInput.enteredName}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={userInput.enteredAge}
          onChange={ageChangeHandler}
        />
      </div>
      <div>
        <button type="submit"> Add</button>
      </div>
    </form>
  );
};
