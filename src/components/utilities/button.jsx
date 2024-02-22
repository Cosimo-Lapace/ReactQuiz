import { useContext } from "react";
import { QuizContext } from "../store/quiz-context";

export default function Button({ children,answer,i, ...props }) {
  const { setQuestion, showQuestion } = useContext(QuizContext);
  
  return (
    <>
      <button
        className={`${
          showQuestion.isCorrect === i
            ? "correct"
            : showQuestion.isWrong === i
            ? "wrong"
            : ""
        }`}
        onClick={() => setQuestion(answer, i, showQuestion.questions.text)}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
