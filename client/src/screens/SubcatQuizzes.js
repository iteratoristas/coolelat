import React from "react";
import QuizCardTop from "../components/QuizCardTop";
import QuizCard from "../components/QuizCard";
import { useData } from "../context/DataProvider";
import { unparsePath } from "../helpers/pathFunctions";
import Flow from "../components/Flow";

export default function SubcatQuizzes(props) {
  const data = useData();
  const subcategory = unparsePath(props.match.params.subcategory);
  const quiz = data.quizzes
    .filter((value) => value.subcategory === subcategory)
    .filter(
      (value, index, array) => array[index + 1]?.quiz_name !== value?.quiz_name
    );

  return (
    <Flow
      loading={data.loading}
      error={data.error}
      props={props}
      categories={data.categories}
      subcategories={data.subcategories}
      component={
        <>
          <div className="cat-title">
            <h1>{subcategory} Problems</h1>
          </div>
          <h2>Most Popular</h2>
          <div className="quiz-box">
            {quiz.slice(0, 3).map((value, index) => (
              <QuizCardTop key={index} quiz={value} />
            ))}
          </div>
          <h2>All Problems</h2>
          <div>
            {quiz.map((value, index) => (
              <QuizCard key={index} quiz={value} />
            ))}
          </div>
        </>
      }
    />
  );
}
