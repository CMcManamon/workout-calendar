import "./Cell.css";

const WorkoutCell = (props) => {
  const { label } = props;
  return (
    <div className="workout-cell">
      <div className="workout-name">{label}</div>
      <div className="checkbox-container">
        <input type="checkbox" name="nailed-it"></input>

        <input type="checkbox" name="barely-made-it"></input>
        <label for="nailed-it">Nailed It</label>
        <label for="barely-made-it">Barely Made It</label>
      </div>
    </div>
  );
};
export default WorkoutCell;
