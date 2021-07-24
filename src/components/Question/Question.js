import { Fragment } from "react";
import Option from "../Option/Option";
import classes from "./Question.module.css";

const Question = (props) => {
  const displayOptions = props.question.options.map((option) => {
    return <Option key={option}>{option}</Option>;
  });

  return (
    <Fragment>
      <h2>{props.question.question}</h2>
      <div className={classes.options}>{displayOptions}</div>
    </Fragment>
  );
};

export default Question;
