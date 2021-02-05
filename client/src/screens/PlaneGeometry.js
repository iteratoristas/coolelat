import React from "react";
import data from "../mock/planegeometry";
import Question from "../Question";

export default function PlaneGeometry() {
  return data.map((element, index) => {
    return (
      <Question
        key={index}
        index={index}
        question={element.question}
        answer={element.answer}
        options={element.options}
        explanation={element.explanation}
      />
    );
  });
}
