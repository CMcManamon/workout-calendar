import "./Calendar.css";
import Cell from "./Cell/Cell";
import LabelOnlyCell from "./Cell/LabelOnlyCell";
import WorkoutCell from "./Cell/WorkoutCell";

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
const rowCount = 4;
let rows = [];

for (let i = 0; i < rowCount; i++) {
  let row = [];
  row.push(
    <Cell key={"week" + i}>
      <div className="week-number-header">
        Week
        <br />
        {i + 1}
      </div>
    </Cell>
  );
  for (let j = 0; j < 7; j++) {
    row.push(
      <Cell key={7 * i + j}>
        <WorkoutCell label={`${7 * i + j}`} />
      </Cell>
    );
  }
  rows.push(row);
}

const Calendar = () => {
  return (
    <div className="calendar">
      {rowHeaders.map((day, index) => {
        return (
          <Cell key={"weekday" + index}>
            <div className="weekday-header">{day}</div>
          </Cell>
        );
      })}
      {rows}
    </div>
  );
};
export default Calendar;
