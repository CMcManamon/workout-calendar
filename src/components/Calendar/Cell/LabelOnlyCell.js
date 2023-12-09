import "./Cell.css";

const LabelOnlyCell = (props) => {
  const { day } = props;
  return <div className="label-only-cell">{day.name}</div>;
};
export default LabelOnlyCell;
