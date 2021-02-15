import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useData } from "../context/DataProvider";
import Question from "../components/Question";
import randomizer from "../randomizer";

export default function QuizPage(props) {
  const data = useData();
  const quizName = props.match.params.quiz.split("-").map((value) => value.toLowerCase()).join(" ");
  const quizzes = data.quizzes.filter(value => value.quiz_name.toLowerCase() === quizName);

  return (
    <>
      {data.error && <div>Error</div>}
      {data.loading && <div>Loading...</div>}
      {!data.error && !data.loading && quizzes && (
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
          <h1>{quizzes[0].quiz_name}</h1>
          <div>
            {randomizer(quizzes).map((element, index) => {
              return (
                <Question
                  key={index}
                  index={index}
                  question={element.question}
                  answer={element.answer}
                  image={element.image}
                  options={element.options}
                  explanation={element.explanation}
                />
              );
            })}
          </div>
          <PrimaryButton
            //   className="quiz-button"
            text="Submit"
            type="submit"
          />
        </div>
      )}
    </>
  );
}
