import logo from "../../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Quiz logo" />
      <h1>REACTQUIZ</h1>
    </header>
  );
}
