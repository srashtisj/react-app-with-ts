import "./PersonDetail.css";
import { Card } from "./Card";

export function PersonDetail(props: any) {
  return (
    <Card className="person-detail-wrapper">
      <p>Name: {props.name}</p>
    </Card>
  );
}
