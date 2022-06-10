import "./PersonDetail.css";
import { Card } from "../UI/Card";

export const PersonDetail = (props: any) => {
  return (
    <Card className="person-detail-wrapper">
      <p>Name: {props.name}</p>
    </Card>
  );
};
