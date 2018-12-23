import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const commonStyles = `
  display: inline-block;
  text-decoration: none;
  background-repeat: no-repeat;
  background-image: var(--gradient--link);
  background-size: 100% 0.3rem;
  background-position: 0 115%;
  transition: background-size 100ms cubic-bezier(0.5, 0, 0.1, 1);
  color: currentColor;

  &:hover,
  &:focus {
    background-size: 100% 100%;
    background-image: var(--gradient--link--hover);
  }

  &:focus {
    outline: none;
  }
`;

const ExternalLink = styled.a`
  ${commonStyles}
`;

const StyledGatsbyLink = styled(Link)`
  ${commonStyles}
`;

const StyledLink = ({ href, to, ...props }) =>
  href === '' ? (
    <StyledGatsbyLink to={to} {...props} />
  ) : (
    <ExternalLink href={href} {...props} />
  );

StyledLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
};

StyledLink.defaultProps = {
  href: '',
  to: '',
};

export default StyledLink;
