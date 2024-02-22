import { createContext, useCallback, useState } from "react";
import questions from "../../questions";
import sorting from "../../sorting";
export const QuizContext = createContext();

let index = 0;
let timer = 5000;
let lastQuestion = questions.length - 1;
for (const question of questions) {
  question.answers.sort(sorting);
}
const QuizProvider = ({ children }) => {
  const [showQuestion, setShowQuestion] = useState({
    questions: questions[index],
    isCorrect: null,
    isWrong: null,
    summary: [],
    summaryAnswersCorrect: 0,
    summaryAnswersIncorrect: 0,
    summaryAnswersSkipped: 0,
  });

  const [progress, setProgress] = useState(timer);

 
  function setQuestion (questionCoorect, i, answer) {
    setProgress(timer);
    const newSummary = {
      title: answer,
      question: questionCoorect,
      isCorrect:
        showQuestion.questions.correct === questionCoorect
          ? "correct"
          : "wrong",
    };

    if (showQuestion.questions.correct === questionCoorect) {
      setShowQuestion((prev) => {
        return {
          ...prev,
          isCorrect: i,
          summary: [...prev.summary, newSummary],
          summaryAnswersCorrect: prev.summaryAnswersCorrect + 1,
        };
      });
    } else {
      setShowQuestion((prev) => {
        return {
          ...prev,
          isWrong: i,
          summary: [...prev.summary, newSummary],
          summaryAnswersIncorrect: prev.summaryAnswersIncorrect + 1,
        };
      });
    }
    timer = 1500;
    setProgress(timer);
  };

  const onTimeout = useCallback(() => {
    index++;
    setProgress(timer);
    if (timer !== 1500) {
      const newSummary = {
        title: showQuestion.questions.text,
        question: "skipped",
        isCorrect: "skipped",
      };

      setShowQuestion((prev) => {
        return {
          ...prev,
          summary: [...prev.summary, newSummary],
          questions: questions[index],
          summaryAnswersSkipped: prev.summaryAnswersSkipped + 1,
        };
      });
    } else {
      setShowQuestion((prev) => {
        return {
          ...prev,
          questions: questions[index],
          isCorrect: null,
          isWrong: null,
        };
      });
    }

    timer = 5000;
    setProgress(timer);
  }, [setProgress, setShowQuestion, questions, index]);

  return (
    <QuizContext.Provider
      value={{
        index,
        lastQuestion,
        timer,
        showQuestion,
        progress,
        setProgress,
        setShowQuestion,
        setQuestion,
        onTimeout,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
