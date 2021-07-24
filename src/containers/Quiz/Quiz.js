import { useReducer } from "react";
import Button from "../../components/Button/Button.js";
import classes from "./Quiz.module.css";
import Question from "../../components/Question/Question";

const Q = [
  {
    question: "What is your occupation ? ",
    options: ["Student", "Teacher", "Student a", "Teacher a"],
    answer: "Student",
  },
  {
    question: "What is your name ? ",
    options: ["Akash", "Sahil", "Amrit", "Ganja"],
    answer: "Akash",
  },
  {
    question: "What is your age ? ",
    options: ["20", "22", "10", "15"],
    answer: "20",
  },
];

const reducer = (state, action) => {
  const currentIndex = Q.findIndex((q) => q === state);

  if (action.type === "next") {
    if (currentIndex >= Q.length - 1) return state;

    return Q[currentIndex + 1];
  }

  if (action.type === "previous") {
    if (currentIndex <= 0) return state;

    return Q[currentIndex - 1];
  }
};

const Quiz = () => {
  const [currentQuestion, dispatch] = useReducer(reducer, Q[0]);

  // const nextQuesHandler = () => {};

  // const prevQuesHandler = () => {
  //   const currentIndex = Q.findIndex((q) => q === currentQuestion);
  // };

  return (
    <div className={classes.quiz}>
      <Question question={currentQuestion} />
      <div className={classes.actions}>
        <Button clicked={() => dispatch({ type: "previous" })}>⬅ Prev</Button>
        <Button clicked={() => dispatch({ type: "next" })}>Next ➡</Button>
      </div>
    </div>
  );
};

export default Quiz;
