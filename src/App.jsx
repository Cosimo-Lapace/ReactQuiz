import Quiz from "./components/Quiz/quiz.jsx";
import Header from "./components/header/Header";
import QuizProvider from "./components/store/quiz-context.jsx";

function App() {
  return (
    <QuizProvider>
      <Header />
      <main>
        <Quiz />
      </main>
    </QuizProvider>
  );
}

export default App;
