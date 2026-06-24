import QUESTIONS from "../questions";
import completeImg from "../assets/quiz-complete.png";

export default function Summary({ userAnswers }) {
  const skipped = Math.round(
    (userAnswers.filter((ans) => ans === null).length / userAnswers.length) *
      100,
  );
  const correct = Math.round(
    (userAnswers.filter((ans, index) => ans === QUESTIONS[index].answers[0])
      .length /
      userAnswers.length) *
      100,
  );
  const incorrect = 100 - skipped - correct;
  return (
    <div id="summary">
      <img src={completeImg} alt="Quiz complete" />
      <h2>Thank you for answers!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correct}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrect}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answ, index) => {
          let styles = "user-answer";
          if (answ === null) {
            styles += " skipped";
          }
          if (answ === QUESTIONS[index].answers[0]) {
            styles += " correct";
          } else {
            styles += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={styles}>{answ ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
