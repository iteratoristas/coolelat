import React from "react";
import PropTypes from "prop-types";
import {validatePath} from '../helpers/pathFunctions';
export default function Flow({ loading, error, component, props, categories, subcategories}) {
  if (error) {
    return <div>Error</div>;
  } else if (loading) {
    return <div>Loading</div>;
  } else {
    if (validatePath(props, {categories, subcategories})) {
      return component;
    } else {
      return 'PUSH TO ERROR 404'
    }
  }
}

Flow.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  component: PropTypes.element,
  props: PropTypes.object,
  categories: PropTypes.array,
  subcategories: PropTypes.array,
};
