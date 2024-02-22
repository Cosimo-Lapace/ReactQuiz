import { useContext } from "react";
import Resume from "../resume/Resume";
import ProgressBar from "../progressBar/progressBar";
import Button from "../utilities/button";

import { QuizContext } from "../store/quiz-context";

export default function Quiz() {
  const { index, lastQuestion, showQuestion } = useContext(QuizContext);
  console.log("ciao")
  return (
    <>
      {index <= lastQuestion ? (
        <div id="quiz">
          <div id="question">
            <ProgressBar />
            <h2>{showQuestion.questions.text}</h2>
          </div>
          <div id="answers">
            {showQuestion.questions.answers.map((answer, i) => (
              <div className="answer" key={showQuestion.questions.id + i}>
                <Button value={answer} answer={answer} i={i}>
                  {answer}
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Resume
        />
      )}
    </>
  );
}
