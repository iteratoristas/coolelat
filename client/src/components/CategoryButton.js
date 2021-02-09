import React from "react"
import PropTypes from "prop-types"

function CategoryButton(props) {
    return (
        <button className="category-button" type={props.type}>
            <div className="cat-btn-text">{props.text}</div>
        </button>
    )
}


  
CategoryButton.propTypes = {
   text: PropTypes.string.isRequired,
   type: PropTypes.oneOf(["button", "submit"]),
};
  
export default CategoryButton;