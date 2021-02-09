import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function QuizCard() {
  // make dynamic
  const link = window.location.pathname;

  return (
    <div className="quiz_card">
        <div className="quiz_card_img">
            <img alt ='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png"/>
        </div>
        <div className="quiz_card_body">
        <div className="quiz_card_header">
          Multiplication by 2
        </div>
          <div className="quiz_description">
            Multiplication by two is composed of ten questions sure to help your child master multiplication.
        </div>
        {/* make dynamic */}
        <PrimaryButton onClick={(e) => window.location = link+ '/multiplication'}/>
      </div>
    </div>
  );
}
