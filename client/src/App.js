import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./screens/Home";
import Category from "./screens/Category";
import Subcategory from "./screens/Subcategory";
import QuizPage from "./screens/QuizPage";
import SubcatQuizzes from "./screens/SubcatQuizzes"
import DataProvider from "./context/DataProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAQuestion from "./screens/AddAQuestion";

function App() {
  return (
    <DataProvider>
      <Router> 
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Category} />
          <Route exact path="/question" component={AddAQuestion} />
          <Route exact path="/categories/:category" component={Subcategory} />
          <Route
            exact
            path="/categories/:category/:subcategory"
            component={SubcatQuizzes}
          />
          <Route
            exact
            path="/categories/:category/:subcategory/:quiz"
            component={QuizPage}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
