import "./Cell.css";
import { useEffect, useState } from "react";

const StatCell = (props) => {
  const { day, handleChange, id } = props;
  const [weight, setWeight] = useState(day.weight);
  const [chest, setChest] = useState(day.chest);
  const [waist, setWaist] = useState(day.waist);
  const [arm, setArm] = useState(day.arm);
  const [thigh, setThigh] = useState(day.thigh);

  useEffect(() => {
    handleChange(
      {
        ...day,
        weight: weight,
        chest: chest,
        waist: waist,
        arm: arm,
        thigh: thigh,
      },
      id
    );
  }, [weight, chest, waist, arm, thigh]);

  return (
    <div className="stat-cell">
      <span>
        <label for="stat-weight">Weight</label>
        <input
          type="text"
          maxLength={10}
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
      </span>
      <span>
        <label for="stat-chest">Chest</label>
        <input
          type="text"
          maxLength={10}
          onChange={(e) => setChest(e.target.value)}
          value={chest}
        />
      </span>
      <span>
        <label for="stat-waist">Waist</label>
        <input
          type="text"
          maxLength={10}
          onChange={(e) => setWaist(e.target.value)}
          value={waist}
        />
      </span>
      <span>
        <label for="stat-arm">Arm</label>
        <input
          type="text"
          maxLength={10}
          onChange={(e) => setArm(e.target.value)}
          value={arm}
        />
      </span>
      <span>
        <label for="stat-thigh">Thigh</label>
        <input
          type="text"
          maxLength={10}
          onChange={(e) => setThigh(e.target.value)}
          value={thigh}
        />
      </span>
    </div>
  );
};
export default StatCell;
