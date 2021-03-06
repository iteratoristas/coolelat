import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import QuizCardTop from "../../components/QuizCardTop";
import useFetch from "../../hooks/useFetch";
import Flow from "../../components/Flow";
import { useHistory } from "react-router-dom";
import { navigate } from "../../helpers/navigate";
import { useAuthContext } from "../../context/AuthProvider";

export default function TeacherHome(props) {
  const { isPending: loading, error, data } = useFetch("teacher/quizzes");
  const auth = useAuthContext();
  const history = useHistory();

  return (
    <Flow
      loading={loading}
      error={error}
      props={props}
      component={
        <>
          <div className="cat-title">
            <h1>Hello, Teacher {auth.user['first_name']}!</h1>
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
                    <QuizCardTop key={index} quiz={element} text="Edit Quiz" path="edit" />
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
                    <QuizCardTop key={index} quiz={element} text="Edit Quiz" path={`/edit/${element.quiz_id}`} />
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
              <PrimaryButton text="Create a Quiz" onClick={() => navigate(history, {route: '/create'}) }/>
            </div>
          )}
        </>
      }
    />
  );
}
