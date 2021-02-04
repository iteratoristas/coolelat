import "./App.css";
import PrimaryButton from "./components/PrimaryButton";
import AppBar from "./components/AppBar";
import QuizCard from "./components/QuizCard";

function App() {
  return (
    <>
      <AppBar />
      <QuizCard/>
      <PrimaryButton text="Login" type="button" />
      <PrimaryButton type="button" />
    </>
  );
}

export default App;
