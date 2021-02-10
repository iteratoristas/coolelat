import React from "react";
import PropTypes from "prop-types";

function CategoryButton(props) {
  return (
    <button
      className="category-button"
      type={props.type}
      onClick={(e) => {
        window.location = `${window.location.pathname}/${props.link}`;
      }}
    >
      <div className="cat-btn-text">{props.text}</div>
    </button>
  );
}

CategoryButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
};

export default CategoryButton;
