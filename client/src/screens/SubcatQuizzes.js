import React from "react";
import QuizCardTop from "../components/QuizCardTop"
import QuizCard from "../components/QuizCard"
import { useData } from "../context/DataProvider";

export default function SubcatQuizzes() {
    const data = useData();
    const paths = window.location.pathname.split('/');
    const subcategory = paths[paths.length - 1].split('-').map(value => value[0].toUpperCase() + value.substring(1)).join('-')
    const quiz = data.quizzes.filter((value) => value.subcategory === subcategory);

    return (
        <>
            <div className="cat-title"><h1>{subcategory} Problems</h1></div>
            <div className = "quiz-box">
                { quiz.slice(0, 3).map((value, index) =>  <QuizCardTop key={index} quiz={value} />) }
            </div>
            <div>
            { quiz.map((value, index) => <QuizCard key={index} quiz={value} />) }
            </div>
        </>
    )
}
