import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import completeImg from "../assets/quiz-complete.png";
import QuizProgress from "./QuizProgress";
import Question from "./Question";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  let currentQuestionIndex = answers.length;
  let isCompleted = currentQuestionIndex === QUESTIONS.length;

  const handleSelect = useCallback(
    (answer) => {
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
        index={currentQuestionIndex}
        answers={QUESTIONS[currentQuestionIndex].answers}
        selectedAnswer={answers[currentQuestionIndex]}
        onSelect={handleSelect}
      />
    </div>
  );
}
