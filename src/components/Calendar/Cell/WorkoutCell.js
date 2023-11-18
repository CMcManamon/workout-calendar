import "./Cell.css";

const WorkoutCell = (props) => {
  const { label } = props;
  return (
    <div className="workout-cell">
      {label}
      <div className="checkbox-container">
        <div>
          <input type="checkbox" name="nailed-it"></input>
          <br />
          <label for="nailed-it">Nailed It</label>
        </div>
        <div>
          <input type="checkbox" name="barely-made-it"></input>
          <br />
          <label for="barely-made-it">Barely Made It</label>
        </div>
      </div>
    </div>
  );
};
export default WorkoutCell;
