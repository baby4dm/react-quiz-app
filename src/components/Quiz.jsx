import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import completeImg from "../assets/quiz-complete.png";
import QuizProgress from "./QuizProgress";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  let currentQuestionIndex = answers.length;
  let isCompleted = currentQuestionIndex === QUESTIONS.length;
  const handleSelect = useCallback((answer) => {
    setAnswers((prev) => {
      return [...prev, answer];
    });
  }, []);

  if (isCompleted) {
    return <Summary userAnswers={answers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        onSelect={handleSelect}
        index={currentQuestionIndex}
      />
    </div>
  );
}
