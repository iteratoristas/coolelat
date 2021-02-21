import React from 'react'
import Question  from "../Question";
import FormulaQuestion  from "./FormulaQuestion";

export default function QuestionWrapper({ question, index }) {
    if (question.type === "MC") {
        return (<Question
        key={index}
        index={index}
        question={question.question}
        answer={question.answer}
        image={question.image}
        options={question.options}
        explanation={question.explanation}
      />);
    } else if (question.type === "FQ") {
        return <FormulaQuestion key={index} index={index} question={question}/>
    }
    
}
