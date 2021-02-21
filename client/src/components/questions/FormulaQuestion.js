import React, { useState } from "react";
import PropTypes from "prop-types";

export default function FormulaQuestion({ question, index }) {
  /*
    todo:
      - extract formatting into helper fn
      - use calculator for deriving correct answer
      - write test for helper fn
      - test multiple varibales
      - revisit getResult fn for cases where question has more than one variable 
  */

  // const [correctAnswer, setCorrectAnswer] = useState("");
  const [answer, setAnswer] = useState(0);

  const regex = new RegExp(/\[[a-z]+\]/gi);
  const formula = question.formula;
  const formattedQuestion = "";

  let testString = question.question;
  let testVars = testString.match(regex); // gets variables

  // FN FOR INPUTTING VALUES - TODO: EXTRACT
  for (let i = 0; i < testVars.length; i++) {
    const element = testVars[i];
    const index = testString.indexOf(element);

    let string = testString.substring(0, index);
    let value = question.min + Math.random() * question.max - 1;

    if (question.decimal === 0) {
      value = Math.trunc(value)
    } else {
      value = Math.floor(value * Math.pow(10, question.decimal)) / Math.pow(10, question.decimal)
    }

    testString = string + value + testString.substring(index + element.length);
  }
  
  return (
    <div className="question">
      <div className="question_header">
        <h2>Question {index + 1}</h2>
      </div>
      <div className="question_body">
        <p>{testString}</p>
        <div className="question_answer">
          <input style={{padding: ".5rem", marginBottom: "1rem"}} type="number" value={answer} onChange={(e) => setAnswer(e.target.valueAsNumber)} />
        </div>
      </div>
    </div>
  );
}

FormulaQuestion.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  variables: PropTypes.array.isRequired,
};
