import "./PersonDetail.css";
import { Card } from "../UI/Card";

export const PersonDetail = (props: any) => {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <Card className="person-detail-wrapper">
      <p>Name: {props.name}</p>
      <button onClick={clickHandler}> Change </button>
    </Card>
  );
};
