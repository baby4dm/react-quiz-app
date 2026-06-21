import { useCallback, useState } from "react";
import questions from "../questions";
import completeImg from "../assets/quiz-complete.png";
import QuizProgress from "./QuizProgress";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  let currentQuestionIndex = answers.length;
  let isCompleted = currentQuestionIndex === questions.length;

  const handleSelect = useCallback((answer) => {
    setAnswers((prev) => {
      return [...prev, answer];
    });
  }, []);

  if (isCompleted) {
    return (
      <div id="summary">
        <img src={completeImg} alt="Quiz complete" />
        <h2>Thank you for answers!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...questions[currentQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuizProgress
          key={currentQuestionIndex}
          timeout={15000}
          onTimeout={() => handleSelect(null)}
        />
        <h2>{questions[currentQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              <li className="answer" key={answer}>
                <button onClick={() => handleSelect(answer)}>{answer}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
