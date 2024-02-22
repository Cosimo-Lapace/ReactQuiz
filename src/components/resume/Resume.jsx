import { useContext } from "react";
import resume from "../../assets/quiz-complete.png";
import { QuizContext } from "../store/quiz-context";
export default function Resume() {
  const { showQuestion } = useContext(QuizContext);
  const summary = showQuestion.summary;
  const correct =
    (showQuestion.summaryAnswersCorrect / showQuestion.summary.length) * 100;
  const incorrect =
    (showQuestion.summaryAnswersIncorrect / showQuestion.summary.length) * 100;
  const skipped =
    (showQuestion.summaryAnswersSkipped / showQuestion.summary.length) * 100;

  return (
    <div id="summary">
      <div>
        <img src={resume} alt="" />
        <h2>QUIZ COMPLETED</h2>
      </div>
      <div id="summary-stats">
        <div>
          <p className="number">{Math.round(skipped)}%</p>
          <p className="text">Skipped</p>
        </div>
        <div>
          <p className="number">{Math.round(correct)}%</p>
          <p className="text">Correct</p>
        </div>
        <div>
          <p className="number">{Math.round(incorrect)}%</p>
          <p className="text">Incorrect</p>
        </div>
      </div>
      <ol>
        {summary.map((item, index) => (
          <li key={index}>
            <h3>{index + 1}</h3>
            <p className="question">{item.title}</p>
            <p>
              <span className={`user-answer ${item.isCorrect}`}>
                {item.question}
              </span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
