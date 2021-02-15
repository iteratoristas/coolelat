import React from "react"
import PrimaryButton from "./PrimaryButton"

function QuizCardTop({quiz}) {
  const link = window.location.pathname;

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
            <center><PrimaryButton onClick={(e) => window.location = link+ `quiz:${quiz.quiz_id}`}/></center>
        </div>
    )
}

export default QuizCardTop;