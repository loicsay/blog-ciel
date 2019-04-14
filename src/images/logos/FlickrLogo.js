import React from "react";
import PropTypes from "prop-types";

const FlickrLogo = ({ className, width }) => (
  <svg
    className={className}
    width={width}
    viewBox="0 0 112.195 112.195"
    fill="whitesmoke"
  >
    <path
      d="M56.101,112.192c30.976,0,56.095-25.115,56.095-56.096c0-30.978-25.119-56.093-56.095-56.093
		C25.116,0.003,0,25.119,0,56.096C0,87.077,25.116,112.192,56.101,112.192"
    />
    <path
      fill="#dda33b"
      d="M84.246,56.096c0,6.849-5.547,12.401-12.396,12.401c-6.859,0-12.406-5.553-12.406-12.401
			c0-6.847,5.547-12.4,12.406-12.4C78.699,43.696,84.246,49.25,84.246,56.096z"
    />
    <path
      fill="#dda33b"
      d="M52.749,56.096c0,6.849-5.547,12.401-12.406,12.401c-6.847,0-12.394-5.553-12.394-12.401
			c0-6.847,5.547-12.4,12.394-12.4C47.202,43.696,52.749,49.25,52.749,56.096z"
    />
  </svg>
);

FlickrLogo.propTypes = {
  className: PropTypes.string
};

export default FlickrLogo;
