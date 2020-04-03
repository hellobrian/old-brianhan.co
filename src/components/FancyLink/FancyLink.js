import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './FancyLink.css';

export const FancyLink = ({
  href = null,
  to = null,
  children,
  className = '',
  ...props
}) => {
  const classList = [
    'FancyLink',
    'bold',
    'font-family',
    'font-smoothing',
    'current-color',
    className,
  ].join(' ');

  if (href) {
    return (
      <a data-testid="FancyLink" className={classList} href={href} {...props}>
        <span className="FancyLink__span">{children}</span>
      </a>
    );
  }

  if (to) {
    return (
      <Link data-testid="FancyLink" className={classList} to={to} {...props}>
        <span className="FancyLink__span">{children}</span>
      </Link>
    );
  }
};

FancyLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
