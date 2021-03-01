import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./screens/Home";
import About from "./screens/About";
import Category from "./screens/Category";
import Subcategory from "./screens/Subcategory";
import QuizPage from "./screens/QuizPage";
import SubcatQuizzes from "./screens/SubcatQuizzes";
import DataProvider from "./context/DataProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeacherHome from "./screens/teacher/TeacherHome";
import Login from "./screens/auth/Login";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./screens/auth/Signup";
import UnprotectedRoute from "./components/UnprotectedRoute";
import CreateAQuiz from "./screens/teacher/TeacherCreateQuiz";
import TeacherEditQuiz from "./screens/teacher/TeacherEditQuiz";
//import AddAQuestion from "./screens/AddAQuestion";
//import ScorePage from "./screens/ScorePage";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <AppBar />
          <Switch>
            <UnprotectedRoute exact path="/signup" component={Signup} />
            <UnprotectedRoute exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={TeacherHome} />
            <ProtectedRoute exact path="/create" component={CreateAQuiz} />
            <ProtectedRoute exact path="/edit/:quizId" component={TeacherEditQuiz} />
            {/* <Route exact path="/" component={Home} /> */}
            <ProtectedRoute exact path="/categories" component={Category} />
            {/*<Route exact path="/question" component={AddAQuestion} /> */}
            <ProtectedRoute
              exact
              path="/categories/:category"
              component={Subcategory}
            />
            <ProtectedRoute
              exact
              path="/categories/:category/:subcategory"
              component={SubcatQuizzes}
            />
            <ProtectedRoute
              exact
              path="/categories/:category/:subcategory/:quiz"
              component={QuizPage}
            />
            <Route exact path="/about" component={About} />
            {/*<ScorePage /> */}
          </Switch>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
