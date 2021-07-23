import Option from "../../components/Option/Option.js";
import classes from "./Quiz.module.css";

const Quiz = () => {
  return (
    <div className={classes.quiz}>
      <h2>Q. What is your name</h2>
      <div className={classes.options}>
        <Option>Student</Option>
        <Option>Teacher</Option>
        <Option>Student a</Option>
        <Option>Teacher a</Option>
      </div>
    </div>
  );
};

export default Quiz;
