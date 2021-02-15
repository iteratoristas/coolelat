import React from "react";
import QuizCardTop from "../components/QuizCardTop"
import QuizCard from "../components/QuizCard"

export default function SubcatQuizzes() {
    return (
        <>
            <div className="cat-title"><h1>Subcategory name</h1></div>
            <div className = "quiz-box">
                <QuizCardTop />
                <QuizCardTop/>
                <QuizCardTop/>
            </div>
            <div>
                <QuizCard />
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
            </div>
        </>
    )
}
