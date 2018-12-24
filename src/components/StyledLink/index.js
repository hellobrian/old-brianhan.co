import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const styles = `
  display: inline-block;
  text-decoration: none;
  color: currentColor;
`;

const StyledSpan = styled.span`
  background-repeat: no-repeat;
  background-image: var(--gradient--link);
  background-size: 100% 3px;
  background-position: 0 100%;
  padding-bottom: 2px;
`;

const StyledLink = ({ href, to, children, ...props }) =>
  href === '' ? (
    <Link css={styles} to={to} {...props}>
      <StyledSpan>{children}</StyledSpan>
    </Link>
  ) : (
    <a css={styles} href={href} {...props}>
      <StyledSpan>{children}</StyledSpan>
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
