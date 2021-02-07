import React from "react";
import PropTypes from "prop-types";

function PrimaryButton(props) {
  return (
    <button className="primary_btn" type={props.type}>
      <span className="primary_btn_text">{props.text}</span>
    </button>
    
  );
}

PrimaryButton.defaultProps = {
  text: "Start Quiz",
  type: "button",
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
};

export default PrimaryButton;
