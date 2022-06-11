import "./PersonDetail.css";
import { Card } from "../UI/Card";

export const PersonDetail = (props: any) => {
  let name = props.name;

  return (
    <Card className="person-detail-wrapper">
      <p>Name: {name}</p>
    </Card>
  );
};
