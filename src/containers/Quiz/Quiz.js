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
    answer: "Akash",
  },
  {
    question: "What is your age ? ",
    options: ["20", "22", "10", "15"],
    answer: "20",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(Q[0]);

  const nextQuesHandler = () => {
    const currentIndex = Q.findIndex((q) => q === currentQuestion);

    if (currentIndex >= Q.length - 1) return;

    setCurrentQuestion(Q[currentIndex + 1]);
  };

  const prevQuesHandler = () => {
    const currentIndex = Q.findIndex((q) => q === currentQuestion);

    if (currentIndex <= 0) return;

    setCurrentQuestion(Q[currentIndex - 1]);
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
