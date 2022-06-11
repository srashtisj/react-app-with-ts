import { Card } from "../UI/Card";
import { PersonDetail } from "./PersonDetail";

export const Persons = (props: any) => {
  let personContent = <p> No person found</p>;
  if (props.items.length > 0) {
    personContent = props.items.map((item: any) => (
      <PersonDetail key={item.name} name={item.name} />
    ));
  }

  return (
    <Card>
         {/** Type 5 */}
      {personContent}


      {/** Type 4 */}
      {/* {props.items.length === 0 && <p> No person found</p>}

      {props.items.length > 0 &&
        props.items.map((item: any) => (
          <PersonDetail key={item.name} name={item.name} />
        ))} */}


     { /** Type 3 */}
      {/* {props.items.length === 0 ? (
        <p> No person found</p>
      ) : (
        props.items.map((item: any) => (
          <PersonDetail key={item.name} name={item.name} />
        ))
      )} */}


     { /** Type 2 */}
      {/* {props.items.map((item: any) => (
        <PersonDetail key={item.name} name={item.name} />
      ))} */}

      
     { /** Type 1 */}
      {/* <PersonDetail name={props.items[0].name} />
      <PersonDetail name={props.items[1].name} /> */}
    </Card>
  );
};
