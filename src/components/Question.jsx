import { useCallback, useState } from "react";
import Answers from "./Answers";
import QuizProgress from "./QuizProgress";
import QUESTIONS from "../questions";

export default function Question({ onSelect, index }) {
  const [answer, setAnswerState] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelect(answer) {
    setAnswerState({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswerState({
        selectedAnswer: answer,
        isCorrect: answer !== null && answer === QUESTIONS[index].answers[0],
      });
      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect === null) {
    answerState = "answered";
  }
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }

  return (
    <div id="question">
      <QuizProgress
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer ? null : () => onSelect(null)}
        answerState={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        onSelect={handleSelect}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
      />
    </div>
  );
}
