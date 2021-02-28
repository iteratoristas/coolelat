import React from "react";
import { useHistory } from "react-router-dom";
import { navigate } from "../helpers/navigate";
import { parsePath } from "../helpers/pathFunctions";
import PrimaryButton from "./PrimaryButton";

function QuizCardTop({ quiz, text }) {
  const history = useHistory();

  return (
    <div className="quizcard-square">
      <div className="qc-title">
        {quiz?.quiz_name ?? "Multiplication by two"}
      </div>
      <div className="qc-description">
        <p>
          {quiz?.description ??
            "Multiplication by two is composed of ten questions sure to help your child master multiplication."}
        </p>
      </div>
      <center>
        <PrimaryButton
          text={text}
          onClick={(e) =>
            navigate(history, { route: parsePath(quiz?.quiz_name) })
          }
        />
      </center>
    </div>
  );
}

export default QuizCardTop;
