import "./Cell.css";

const StatCell = () => {
  return (
    <div className="stat-cell">
      <span>
        <label for="stat-weight">Weight</label>
        <input type="text" />
      </span>
      <span>
        <label for="stat-chest">Chest</label>
        <input type="text" />
      </span>
      <span>
        <label for="stat-waist">Waist</label>
        <input type="text" />
      </span>
      <span>
        <label for="stat-arm">Arm</label>
        <input type="text" />
      </span>
      <span>
        <label for="stat-thigh">Thigh</label>
        <input type="text" />
      </span>
    </div>
  );
};
export default StatCell;
