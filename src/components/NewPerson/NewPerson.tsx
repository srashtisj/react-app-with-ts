import "./NewPerson.css";
import { PersonForm } from "./PersonForm";

export const NewPerson = (props: any) => {
  const savePersonDataHandler = (enteredPersonData: any) => {
    //console.log(enteredPersonData);
    props.onAddPersonHandler(enteredPersonData);
  };
  return (
    <div className="new-person">
      <PersonForm onSavePersonData={savePersonDataHandler} />
    </div>
  );
};
