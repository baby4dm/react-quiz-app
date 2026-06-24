import { useCallback, useState } from "react";
import Answers from "./Answers";
import QuizProgress from "./QuizProgress";
import QUESTIONS from "../questions";

export default function Question({
  answerState,
  userAnswers,
  onSelect,
  index,
}) {
  return (
    <div id="question">
      <QuizProgress timeout={15000} onTimeout={() => onSelect(null)} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        onSelect={onSelect}
        answerState={answerState}
        userAnswers={userAnswers}
      />
    </div>
  );
}
