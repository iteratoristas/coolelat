import React from "react";
import PropTypes from "prop-types";

export default function Flow({ loading, error, component }) {
  if (error) {
    return <div>Error</div>;
  } else if (loading) {
    return <div>Loading</div>;
  } else {
    return component;
  }
}

Flow.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  component: PropTypes.element,
};
