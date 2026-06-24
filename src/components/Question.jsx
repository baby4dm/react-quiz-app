import { useCallback, useState } from "react";
import Answers from "./Answers";
import QuizProgress from "./QuizProgress";
import QUESTIONS from "../questions";

export default function Question({ index, answers, onSelect }) {
  const [answerState, setAnswerState] = useState("");

  const handleSelect = useCallback(
    (answer) => {
      setAnswerState("answered");
      setTimeout(() => {
        if (answer === QUESTIONS[index].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          onSelect(answer);
        }, 1000);
      }, 1000);
    },

    [index, onSelect],
  );
  return (
    <div id="question">
      <QuizProgress timeout={15000} onTimeout={() => onSelect(null)} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={answers}
        onSelect={handleSelect}
        answerState={answerState}
        selectedAnswer={answers[index]}
      />
    </div>
  );
}
