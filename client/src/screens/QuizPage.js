import React from "react"
import PrimaryButton from "../components/PrimaryButton"
import WordProblems from "./WordProblems"

export default function QuizPage() {
    return (
        <>
        <center><h1>Quiz Name</h1></center>
        <WordProblems />
        <center><PrimaryButton class="quiz-button" text="Submit" type="submit" /></center>
        <div className="space"></div>
        </>
    )
}