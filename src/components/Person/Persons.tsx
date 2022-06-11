import { Card } from "../UI/Card";
import { PersonDetail } from "./PersonDetail";

export const Persons = (props: any) => {
  return (
    <Card>
      {props.items.map((item: any) => (
        <PersonDetail key={item.name} name={item.name} />
      ))}

      {/* <PersonDetail name={props.items[0].name} />
      <PersonDetail name={props.items[1].name} /> */}
    </Card>
  );
};
