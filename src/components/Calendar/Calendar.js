import "./Calendar.css";
import Cell from "./Cell/Cell";

const rowHeaders = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "STATurday",
  "Sunday",
];
const rowCount = 4;
let rows = [];

for (let i = 0; i < rowCount; i++) {
  let row = [];
  row.push(<Cell key={"week" + i}>Week {i + 1}</Cell>);
  for (let j = 0; j < 7; j++) {
    row.push(<Cell key={7 * i + j}>{7 * i + j}</Cell>);
  }
  rows.push(row);
}

const Calendar = () => {
  return (
    <div className="calendar">
      {rowHeaders.map((day, index) => {
        return <Cell key={"weekday" + index}>{day}</Cell>;
      })}
      {rows}
    </div>
  );
};
export default Calendar;
