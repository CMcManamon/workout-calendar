import "./Calendar.css";
import Cell from "./Cell/Cell";
import LabelOnlyCell from "./Cell/LabelOnlyCell";
import WorkoutCell from "./Cell/WorkoutCell";
import StatCell from "./Cell/StatCell";
import { useEffect } from "react";

const rowHeaders = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Calendar = (props) => {
  const { template } = props;
  if (!template) return "";

  const templateTitle = template.workout.title;
  const rowCount = template.workout.data.length / 7;
  let rows = [];
  for (let i = 0; i < rowCount; i++) {
    let row = [];
    row.push(
      <div className="week-number-header">
        <div className="week-label-text">Week</div>
        <div className="week-label-number">{i + 1}</div>
      </div>
    );
    for (let j = i * 7; j < i * 7 + 7; j++) {
      let cell;
      switch (template.workout.data[j].type) {
        case "workout":
          cell = <WorkoutCell label={template.workout.data[j].name} />;
          break;
        case "label":
          cell = <LabelOnlyCell label={template.workout.data[j].name} />;
          break;
        case "stats":
          cell = <StatCell />;
          break;
        default:
      }
      row.push(<Cell key={7 * i + j}>{cell}</Cell>);
    }
    rows.push(row);
  }

  return (
    <div>
      <h1 className="template-title">{templateTitle}</h1>
      <div className="calendar">
        {rowHeaders.map((day, index) => {
          return <div className="weekday-header">{day}</div>;
        })}
        {rows}
      </div>
    </div>
  );
};
export default Calendar;
