import React from 'react';
import PropTypes from 'prop-types';
import './SvgCircle.css';

export const SvgCircle = ({ className = '', ...props }) => (
  <svg className={`SvgCircle ${className}`.trim()} {...props} />
);

SvgCircle.propTypes = {
  className: PropTypes.string,
};
