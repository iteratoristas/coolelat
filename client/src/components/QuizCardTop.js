import React from "react"
import PrimaryButton from "./PrimaryButton"

function QuizCardTop({quiz}) {
    // useHistory
  const link = window.location.pathname;
//   extract into helper fn
  const direction = quiz?.quiz_name.split(' ').map(value => value.toLowerCase()).join('-');

    return (
        <div className="quizcard-square">
            <div className="qc-title">
                {quiz?.quiz_name ?? "Multiplication by two" }
            </div>
            <div className="qc-description">
                <p>
                {quiz?.description ?? "Multiplication by two is composed of ten questions sure to help your child master multiplication."}
                </p>
            </div>
            <center><PrimaryButton onClick={(e) => window.location = link+ `/${direction}`}/></center>
        </div>
    )
}

export default QuizCardTop;