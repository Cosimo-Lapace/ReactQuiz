import { useContext, useEffect } from "react";
import { QuizContext } from "../store/quiz-context";

export default function ProgressBar({

}) {
  const { timer, onTimeout, progress, setProgress } = useContext(QuizContext);


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevTime) => {
        return prevTime - 10;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(onTimeout, progress);
   
    return () => clearTimeout(timeout);

   
  }, [ onTimeout, progress]);

  return (
    <>
      <progress
        className={timer === 1500 ? "answered" : ""}
        value={progress}
        max={timer}
      />
    </>
  );
}
