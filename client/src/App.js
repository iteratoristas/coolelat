import "./App.css";
import AppBar from "./components/AppBar";
import Category from "./screens/Category";
import QuizPage from './screens/QuizPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>} />
        <Route exact path="/categories" component={Category} />
        <Route exact path="/categories/:subcategory" component={QuizPage} />
        <Route exact path="/about" component={() => <div>About</div>} />
      </Switch>
    </Router>
  );
}

export default App;
