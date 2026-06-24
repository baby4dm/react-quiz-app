import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import completeImg from "../assets/quiz-complete.png";
import QuizProgress from "./QuizProgress";
import Question from "./Question";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  let currentQuestionIndex =
    answerState === "" ? answers.length : answers.length - 1;
  let isCompleted = currentQuestionIndex === QUESTIONS.length;
  const handleSelect = useCallback(
    (answer) => {
      if (answer !== null) {
        setAnswerState("answered");

        setTimeout(() => {
          if (answer === QUESTIONS[currentQuestionIndex].answers[0]) {
            setAnswerState("correct");
          } else {
            setAnswerState("wrong");
          }
          setTimeout(() => {
            setAnswerState("");
          }, 2000);
        }, 1000);
      }

      setAnswers((prev) => {
        return [...prev, answer];
      });
    },

    [],
  );

  if (isCompleted) {
    return (
      <div id="summary">
        <img src={completeImg} alt="Quiz complete" />
        <h2>Thank you for answers!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        userAnswers={answers}
        answerState={answerState}
        onSelect={handleSelect}
        index={currentQuestionIndex}
      />
    </div>
  );
}
