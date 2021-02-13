import "./App.css";
import AppBar from "./components/AppBar";
import Category from "./screens/Category";
import Subcategory from "./screens/Subcategory";
import QuizPage from "./screens/QuizPage";
import QuizCard from "./components/QuizCard";
import DataProvider from "./context/DataProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/categories" component={Category} />
          <Route
            exact
            path="/categories/:category"
            component={Subcategory}
          />
          <Route
            exact
            path="/categories/:category/:subcategory"
            component={() => (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1",
                  gridTemplateRows: "auto-fit",
                  gap: "1rem",
                }}
              >
                <h1>Subcategory Problems:</h1>
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
              </div>
            )}
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
