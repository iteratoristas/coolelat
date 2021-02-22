import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useData } from "../context/DataProvider";
import randomizer from "../randomizer";
import Flow from "../components/Flow";
import { unparsePath } from "../helpers/pathFunctions";
import { useHistory } from "react-router-dom";
import QuestionWrapper from "../components/questions/QuestionWrapper";

export default function QuizPage(props) {
  const data = useData();
  const quizName = unparsePath(props.match.params.quiz);
  const quizzes = data.quizzes.filter((value) => value.quiz_name.toLowerCase() === quizName.toLowerCase());
  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/Score");
  }

  return (
    <Flow
      loading={data.loading}
      error={data.error}
      props={props}
      categories={data.categories}
      subcategories={data.subcategories}
      component={
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              padding: "2rem 0rem",
              width: "100%",
            }}
          >
            <h1>{quizzes[0]?.quiz_name}</h1>
            <div>
              {randomizer(quizzes).map((element, index) => <QuestionWrapper question={element} index={index}/>)}
            </div>
            <PrimaryButton
              //   className="quiz-button"
              text="Submit"
              type="submit"
              onClick={handleRoute}
            />
          </div>
        </>
      }
    />
  );
}
