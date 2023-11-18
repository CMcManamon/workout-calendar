import "./Cell.css";

const LabelOnlyCell = (props) => {
  const { label } = props;
  return <div className="label-only-cell">{label}</div>;
};
export default LabelOnlyCell;
