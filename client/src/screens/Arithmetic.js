import React from "react";
import add from "../mock/arithmetic/addition";
import Question from "../components/Question";

export default function Arithmetic() {
  return add.map((element, index) => {
    return (
      <Question
        key={index}
        index={index}
        question={element.question}
        answer={element.answer}
        image={element.image}
        options={element.options}
        explanation={element.explanation}
      />
    );
  });
}
