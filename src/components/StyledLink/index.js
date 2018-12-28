import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Span } from './styled';

export const styles = `
  display: inline-block;
  text-decoration: none;
  color: currentColor;
`;

const StyledLink = ({ href, to, children, ...props }) =>
  href === '' ? (
    <Link css={styles} to={to} {...props}>
      <Span>{children}</Span>
    </Link>
  ) : (
    <a css={styles} href={href} {...props}>
      <Span>{children}</Span>
    </a>
  );

StyledLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

StyledLink.defaultProps = {
  href: '',
  to: '',
};

export default StyledLink;
