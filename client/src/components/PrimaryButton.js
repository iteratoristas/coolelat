import React from "react";
import PropTypes from "prop-types";

function PrimaryButton(props) {
  return (
    <button className="primary_btn" type={props.type} onClick={props.onClick}>
      <span className="primary_btn_text">{props.text}</span>
    </button>
    
  );
}

PrimaryButton.defaultProps = {
  text: "Start Quiz",
  type: "button",
  onClick: null
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func
};

export default PrimaryButton;
