import "./Cell.css";

const StatCell = (props) => {
  const { day, handleChange, id } = props;

  const handleFieldChange = (event) => {
    handleChange({ ...day, [event.target.name]: event.target.value }, id);
  };
  return (
    <div className="stat-cell">
      <span>
        <label htmlFor="stat-weight">Weight</label>
        <input
          type="text"
          name="weight"
          maxLength={10}
          onChange={handleFieldChange}
          value={day.weight}
        />
      </span>
      <span>
        <label htmlFor="stat-chest">Chest</label>
        <input
          type="text"
          name="chest"
          maxLength={10}
          onChange={handleFieldChange}
          value={day.chest}
        />
      </span>
      <span>
        <label htmlFor="stat-waist">Waist</label>
        <input
          type="text"
          name="waist"
          maxLength={10}
          onChange={handleFieldChange}
          value={day.waist}
        />
      </span>
      <span>
        <label htmlFor="stat-arm">Arm</label>
        <input
          type="text"
          name="arm"
          maxLength={10}
          onChange={handleFieldChange}
          value={day.arm}
        />
      </span>
      <span>
        <label htmlFor="stat-thigh">Thigh</label>
        <input
          type="text"
          name="thigh"
          maxLength={10}
          onChange={handleFieldChange}
          value={day.thigh}
        />
      </span>
    </div>
  );
};
export default StatCell;
