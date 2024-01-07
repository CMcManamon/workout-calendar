import "./Cell.css";

const WorkoutCell = (props) => {
  const { day, handleChange, id } = props;

  const handleNailedIt = (event) => {
    handleChange(
      {
        ...day,
        nailedIt: event.target.checked,
        barelyMadeIt: false,
      },
      id
    );
  };

  const handleBarelyMadeIt = (event) => {
    handleChange(
      {
        ...day,
        nailedIt: false,
        barelyMadeIt: event.target.checked,
      },
      id
    );
  };

  return (
    <div className="workout-cell">
      <div className="workout-name">{day.name}</div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id=""
          name="nailed-it"
          onChange={handleNailedIt}
          checked={day.nailedIt}
        ></input>

        <input
          type="checkbox"
          name="barely-made-it"
          onChange={handleBarelyMadeIt}
          checked={day.barelyMadeIt}
        ></input>
        <label htmlFor="nailed-it">Nailed It</label>
        <label htmlFor="barely-made-it">Barely Made It</label>
      </div>
    </div>
  );
};
export default WorkoutCell;
