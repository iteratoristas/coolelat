import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import QuizCardTop from "../../components/QuizCardTop";
import useFetch from "../../hooks/useFetch";
import Flow from "../../components/Flow";
import { useHistory } from "react-router-dom";

export default function TeacherHome(props) {
  const { isPending: loading, error, data } = useFetch("teacher/quizzes");
  const history = useHistory();

  // TODO: EXTRACT AND REFACTOR
  const push = (route) => history.push(route);

  return (
    <Flow
      loading={loading}
      error={error}
      props={props}
      component={
        <>
          <div className="cat-title">
            <h1>Hello, Teacher Nix!</h1>
          </div>
          <div
            className="cat-title"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginTop: "1rem",
            }}
          >
            <h2>Published Quizzes</h2>
            {data.quizzes?.filter((quiz) => quiz.published)?.length ? (
              <a href="/published">See more</a>
            ) : null}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {data.quizzes?.length ? (
              data.quizzes
                ?.filter((quiz) => quiz.published)
                .slice(0, 3)
                .map((element, index) => {
                  return (
                    <QuizCardTop key={index} quiz={element} text="Edit Quiz"  />
                  );
                })
            ) : (
              <PrimaryButton text="Create a Quiz" link="create" />
            )}
          </div>

          <div
            className="cat-title"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginTop: "1rem",
            }}
          >
            <h2>Unpublished Quizzes</h2>
            {data.quizzes?.filter((quiz) => !quiz.published)?.length ? (
              <a href="/unpublished">See more</a>
            ) : null}
          </div>
          {data.quizzes?.filter((quiz) => !quiz.published)?.length ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {data.quizzes
                ?.filter((quiz) => !quiz.published)
                .slice(0, 3)
                .map((element, index) => {
                  return (
                    <QuizCardTop key={index} quiz={element} text="Edit Quiz" />
                  );
                })}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>No pending quizzes!</p>
              <PrimaryButton text="Create a Quiz" onClick={() => push('/create') }/>
            </div>
          )}
        </>
      }
    />
  );
}
