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

  // Update local storage any time the calendar changes (checkboxes, stats)
  useEffect(() => {
    localStorage.setItem(workout.title, JSON.stringify(workout));
  }, [workout]);

  // This method gets passed down to child components
  // Child sends back an updated day object when a change occurs
  const handleChange = (day, index) => {
    const days = workout.days.map((d, i) => {
      if (i === index) return day;
      else return d;
    });
    setWorkout({ ...workout, days: days });
  };

  const handleClear = () => {
    const agree = window.confirm(
      "Are you sure you want to clear the calendar?"
    );

    if (agree) {
      // Save all stats before resetting calendar
      const stats =
        JSON.parse(localStorage.getItem(Constants.STORE_STATS)) || [];
      workout.days.forEach((day) => {
        if (day.type === Constants.STATS) {
          if (day.weight || day.chest || day.waist || day.arm || day.thigh) {
            stats.push(day);
          }
        }
      });
      localStorage.setItem(Constants.STORE_STATS, JSON.stringify(stats));
      let clean = workout.days.map((d, i) => {
        if (d.type === Constants.WORKOUT) {
          return { ...d, nailedIt: false, barelyMadeIt: false };
        } else if (d.type === Constants.STATS) {
          return { ...d, weight: "", chest: "", waist: "", arm: "", thigh: "" };
        } else return d;
      });
      setWorkout({ ...workout, days: clean });
    }
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
      <div className="week-number-header" key={`week${i}`}>
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
      row.push(
        <Cell key={j}>
          <div className="day-of-week-header">
            {Constants.ROW_HEADERS[(j % 7) + 1]}
          </div>
          {cell}
        </Cell>
      );
    }
    rows.push(row);
  }

  return (
    <>
      <div className="title-container">
        <h1 className="workout-title">{workoutTitle}</h1>
        <button className="btn-clear" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="calendar">
        {Constants.ROW_HEADERS.map((day) => {
          return (
            <div className="weekday-header" key={day}>
              {day}
            </div>
          );
        })}
        {rows}
      </div>
    </>
  );
};
export default Calendar;
