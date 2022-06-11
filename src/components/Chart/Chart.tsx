import { ChartBar } from "./ChartBar";

export const Chart = (props: any) => {
  return (
    <div>
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
