import "./Calendar.css";
import Cell from "./Cell/Cell";
import LabelOnlyCell from "./Cell/LabelOnlyCell";
import WorkoutCell from "./Cell/WorkoutCell";
import StatCell from "./Cell/StatCell";
import { useEffect, useState } from "react";
import { expandTemplate } from "../../helpers/templateHelpers";
import * as Constants from "../../constants";

const Calendar = ({ template }) => {
  // Load workout from local storage if it exists
  const [workout, setWorkout] = useState(
    JSON.parse(localStorage.getItem(template.title)) ||
      expandTemplate(template) ||
      null
  );

  useEffect(() => {
    localStorage.setItem(workout.title, JSON.stringify(workout));
  }, [workout]);

  const handleChange = (day, index) => {
    const days = workout.days.map((d, i) => {
      if (i == index) return day;
      else return d;
    });
    setWorkout({ ...workout, days: days });
  };

  if (workout === null || workout === undefined) return "";

  const workoutTitle = workout.title;

  // Build calendar row by row
  const rowCount = workout.days.length / 7;
  let rows = [];
  for (let i = 0; i < rowCount; i++) {
    let row = [];
    // Row header e.g. "Week 1"
    row.push(
      <div className="week-number-header">
        <div className="week-label-text">Week</div>
        <div className="week-label-number">{i + 1}</div>
      </div>
    );
    // Build Cells
    for (let j = i * 7; j < i * 7 + 7; j++) {
      let cell;
      const day = workout.days[j];
      switch (day.type) {
        case Constants.WORKOUT:
          cell = (
            <WorkoutCell key={j} id={j} handleChange={handleChange} day={day} />
          );
          break;
        case Constants.LABEL:
          cell = <LabelOnlyCell key={j} day={day} />;
          break;
        case Constants.STATS:
          cell = (
            <StatCell key={j} id={j} handleChange={handleChange} day={day} />
          );
          break;
        default:
      }
      row.push(<Cell key={7 * i + j}>{cell}</Cell>);
    }
    rows.push(row);
  }

  return (
    <div>
      <h1 className="workout-title">{workoutTitle}</h1>
      <div className="calendar">
        {Constants.ROW_HEADERS.map((day, index) => {
          return <div className="weekday-header">{day}</div>;
        })}
        {rows}
      </div>
    </div>
  );
};
export default Calendar;
