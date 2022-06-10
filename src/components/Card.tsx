import "./Card.css";

export function Card(props: any) {
  return <div className="card">{props.children}</div>;
}
