import classes from "./Option.module.css";

const Option = (props) => {
  return (
    <label htmlFor={props.children} className={classes.label}>
      <input type="radio" name="select" id={props.children} />
      <div className={classes.dot} />
      {props.children}
    </label>
  );
};
export default Option;
