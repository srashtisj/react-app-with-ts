import { useState } from "react";
import "./PersonDetail.css";
import { Card } from "../UI/Card";

export const PersonDetail = (props: any) => {
  const [name, setName] = useState(props.name);

  //let title = props.name;

  const clickHandler = () => {
    console.log("Clicked!");
    //title = "Updated";
    setName("Updated!");
  };

  return (
    <Card className="person-detail-wrapper">
      <p>Name: {name}</p>
      <button onClick={clickHandler}> Change </button>
    </Card>
  );
};
