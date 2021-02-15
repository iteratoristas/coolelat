import React from "react"
import PrimaryButton from "./PrimaryButton"

function QuizCardTop() {
  const link = window.location.pathname;

    return (
        <div className="quizcard-square">
            <div className="qc-title">
                Multiplication by two
            </div>
            <div className="qc-description">
                <p>
                Multiplication by two is composed of ten questions sure to help your child master multiplication.
                </p>
            </div>
            <center><PrimaryButton onClick={(e) => window.location = link+ '/multiplication'}/></center>
        </div>
    )
}

export default QuizCardTop;