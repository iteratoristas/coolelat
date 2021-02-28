import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Flow from "../../components/Flow";
import PrimaryButton from "../../components/PrimaryButton";
import { useAuthContext } from "../../context/AuthProvider";
import { useData } from "../../context/DataProvider";
import { navigate } from "../../helpers/navigate";
import { parsePath } from "../../helpers/pathFunctions";

export default function CreateAQuiz(props) {
  const auth = useAuthContext();
  const history = useHistory();
  const { subcategories, loading, error } = useData();
  const [quizName, setQuizName] = useState("");
  const [subcategoryId, setSubcategoryId] = useState(1);

  useEffect(() => {
    if (auth.user.type !== "teacher") {
      window.location.replace("/");
    }
  }, [auth]);

  const test = (e) => {
    e.preventDefault();

    // TODO: SSV -> server/index.js
    const data = { quizName, subcategoryId };
    const token = localStorage.getItem("coolelat_token");

    fetch("http://localhost:5000/teacher/quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const pathname = parsePath(data.quiz.quiz_name);
          return navigate(history, pathname);
        } else {
          // show Alert [see rct-bstrp]
        }
      });
  };
  return (
    <Flow
      loading={loading}
      error={error}
      props={props}
      component={
        <>
          <h1>Create A Quiz</h1>
          <form className="login-form" onSubmit={test}>
            <div className="input-field">
              <label htmlFor="quizName">Quiz Name:</label>
              <input
                type="text"
                id="quizName"
                placeholder="Enter quiz name"
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">Category:</label>
              <select
                name="subcategory"
                size="1"
                onChange={(e) => setSubcategoryId(e.target.value)}
                required
              >
                {subcategories.map((item, index) => (
                  <option key={index} value={item.subcategory_id}>
                    {item.subcategory}
                  </option>
                ))}
              </select>
            </div>
            <PrimaryButton text="Create Quiz" type="submit" />
          </form>
        </>
      }
    />
  );
}
