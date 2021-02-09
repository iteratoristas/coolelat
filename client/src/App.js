import "./App.css";
import PrimaryButton from "./components/PrimaryButton";
import AppBar from "./components/AppBar";
import QuizCard from "./components/QuizCard";
import Categories from "./components/Categories";
import PlaneGeometry from "./screens/PlaneGeometry";
import Arithmetic from "./screens/Arithmetic";

function App() {
  return (
    <>
      
      <AppBar />
      {/*<QuizCard/> 
      <PrimaryButton text="Login" type="button" /> 
      <PrimaryButton type="button" /> */}
      <PlaneGeometry/> 
      <PrimaryButton text="Submit" type="button" />
    </>
  );
}

export default App;
