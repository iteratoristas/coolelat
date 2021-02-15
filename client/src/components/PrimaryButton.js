import React from "react";
import PropTypes from "prop-types";

function PrimaryButton({type, text, link, onClick, ...rest}) {
  return (
    <button className="primary_btn" type={type} onClick={onClick} {...rest}>
      <span className="primary_btn_text">{text}</span>
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
