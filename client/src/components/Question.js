import React, { useState, Context } from "react";
import PropTypes from "prop-types";

export default function Question(props) {
  const { index, question, image, answer, options, explanation } = props;

  const [selectedAnswer, setSelectedAnswer] = useState("");
  //const [showRemark, setShowRemark] = useState(false);
  //const [score, setScore] = useState(0);

  function selectAnswer(e) {
    const value = e.target.value;

    setSelectedAnswer(value);
    //setShowRemark(true);
  }

  function letterEquivalent() {
    const index = options.find((element) => element.option === answer);
    return String.fromCharCode(65 + options.indexOf(index));
  }

  return (
    <div className="question">
      <div className="question_header">
        <h2>Question {index + 1}</h2>
      </div>
      <div className="question_body">
        {image && <img src={image} alt="" />}
        <p>{question}</p>
        <div className="question_options">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", }}
          >
            {options.map((option, index) => {
              return (
                <div key={index} style={{ display: "flex"}}>
                  <p>{String.fromCharCode(65 + index)}.)</p>
                  <button className="options" value={option.option} onClick={selectAnswer} >
                    {option.option}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*showRemark && (
        <div>
          {selectedAnswer === answer ? <p>Congratulations!</p> : <p>Uh-oh, you got the wrong answer :(</p>}
          {explanation ? explanation : <p>The correct answer is {letterEquivalent()} or "{answer}"</p>}
        </div>
          )} */}
    </div>
  );
}

Question.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  image: PropTypes.string,
  answer: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  explanation: PropTypes.string
};
