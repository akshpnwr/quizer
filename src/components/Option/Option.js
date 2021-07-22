import { useRef } from "react";
import classes from "./Option.module.css";

const Option = (props) => {
  const inputRef = useRef();

  const onClickHandler = () => {
    props.click(inputRef.current);
  };

  return (
    <div className={classes.input} onClick={onClickHandler}>
      <input
        checked={props.checked}
        type="radio"
        name="select"
        ref={inputRef}
      />
      <label htmlFor={props.children} className={classes.label}>
        {props.children}
      </label>
    </div>
  );
};
export default Option;
