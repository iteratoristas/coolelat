import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { formatQuestionAndAnswer } from '../../helpers/formulaQuestionFunctions';
import {calculator} from '../../calculator';

export default function FormulaQuestion({ question, index }) {
  const [correctAnswer, setCorrectAnswer] = useState(0); // can be used to check state
  const [answer, setAnswer] = useState(0);
  const [formula, setFormula] = useState("");
  const [formattedQuestion, setFormattedQuestion] = useState("");
  // const regex = new RegExp(/\[[a-z]+\]/gi);

  useEffect(() => {
    const {answer: formula, string: formattedQuestion} = formatQuestionAndAnswer(question);
    setFormattedQuestion(formattedQuestion);
    setFormula(formula);
    setCorrectAnswer(calculator(formula));
  }, [question]);

  return (
    <div className="question">
      <div className="question_header">
        <h2>Question {index + 1}</h2>
      </div>
      <div className="question_body">
        <p>{formattedQuestion}</p>
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
};
