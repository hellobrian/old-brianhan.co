import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const commonLinkStyles = `
  display: inline-block;
  text-decoration: none;
  transition: background-size 100ms cubic-bezier(0.5, 0, 0.1, 1);
  color: currentColor;
`;

const StyledSpan = styled.span`
  background-repeat: no-repeat;
  background-image: var(--gradient--link);
  background-size: 100% 0.375rem;
  background-position: 0 115%;
`;

const ExternalLink = styled.a`
  ${commonLinkStyles}
`;

const StyledGatsbyLink = styled(Link)`
  ${commonLinkStyles}
`;

const StyledLink = ({ href, to, children, ...props }) =>
  href === '' ? (
    <StyledGatsbyLink to={to} {...props}>
      <StyledSpan>{children}</StyledSpan>
    </StyledGatsbyLink>
  ) : (
    <ExternalLink href={href} {...props}>
      <StyledSpan>{children}</StyledSpan>
    </ExternalLink>
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
