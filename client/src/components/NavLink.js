import React from "react";
import PropTypes from 'prop-types';

// add state here? selected link? compare w/ qs
export default function NavLink(props) {
  return (
    <a className="appbar_navlink" href={props.href}>
      {props.text}
    </a>
  );
}

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}