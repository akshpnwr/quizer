import { useState } from "react";
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
    answer: "Student",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(Q[0]);

  const nextQuesHandler = () => {
    console.log("next");
    setCurrentQuestion(Q[1]);
  };

  const prevQuesHandler = () => {
    console.log("next");
    setCurrentQuestion(Q[0]);
  };

  return (
    <div className={classes.quiz}>
      <Question question={currentQuestion} />
      <div className={classes.actions}>
        <Button clicked={prevQuesHandler}>⬅ Prev</Button>
        <Button clicked={nextQuesHandler}>Next ➡</Button>
      </div>
    </div>
  );
};

export default Quiz;
