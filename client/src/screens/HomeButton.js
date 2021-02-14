import React from "react";
import PropTypes from "prop-types";

function HomeButton(props) {
  return (
    <button
      className="home-button"
      type={props.type}
      onClick={(e) => {
        window.location = `${window.location.pathname}/${props.link}`;
      }}
    >
      <div className="home-btn-text">{props.text}</div>
    </button>
  );
}

HomeButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "Learn More"]),
  onClick: PropTypes.func,
};

export default HomeButton;

