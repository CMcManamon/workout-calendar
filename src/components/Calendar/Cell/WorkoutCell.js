import "./Cell.css";
import { useEffect, useState } from "react";

const WorkoutCell = (props) => {
  const { day, handleChange, id } = props;
  const [nailedIt, setNailedIt] = useState(day.nailedIt);
  const [barelyMadeIt, setBarelyMadeIt] = useState(day.barelyMadeIt);

  const handleNailedIt = (event) => {
    if (event.target.checked) {
      setBarelyMadeIt(false);
    }
    setNailedIt(event.target.checked);
  };

  const handleBarelyMadeIt = (event) => {
    if (event.target.checked) {
      setNailedIt(false);
    }
    setBarelyMadeIt(event.target.checked);
  };

  useEffect(() => {
    handleChange(
      { ...day, nailedIt: nailedIt, barelyMadeIt: barelyMadeIt },
      id
    );
  }, [nailedIt, barelyMadeIt]);

  return (
    <div className="workout-cell">
      <div className="workout-name">{day.name}</div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="nailed-it"
          onChange={handleNailedIt}
          checked={nailedIt}
        ></input>

        <input
          type="checkbox"
          name="barely-made-it"
          onChange={handleBarelyMadeIt}
          checked={barelyMadeIt}
        ></input>
        <label for="nailed-it">Nailed It</label>
        <label for="barely-made-it">Barely Made It</label>
      </div>
    </div>
  );
};
export default WorkoutCell;
