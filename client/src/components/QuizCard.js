import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function QuizCard() {
  return (
    <div className="quiz_card">
        <div className="quiz_card_img">
            <img alt ='' src="https://pbs.twimg.com/media/EKTZQWRUcAE4tK0?format=jpg&name=small"/>
        </div>
        <div className="quiz_card_body">
            <h3 className="quiz_card_header">Multiplication by 2</h3>
            <div>
                <p>Multiplication by two is composed of ten questions sure to help your child master multiplication.</p>
                <PrimaryButton/>
            </div>
        </div>
    </div>
  );
}
