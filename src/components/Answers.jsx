import { useRef } from "react";

export default function Answers({
  answers,
  onSelect,
  answerState,
  selectedAnswer,
}) {
  let shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let styles = "";

        if (selectedAnswer === answer) {
          styles = answerState;
        }
        return (
          <li className="answer" key={answer}>
            <button className={styles} onClick={() => onSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
