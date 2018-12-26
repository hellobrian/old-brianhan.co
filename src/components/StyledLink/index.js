import React from 'react';
import PropTypes from 'prop-types';
import { Span, StyledGatsbyLink, ExternalLink } from './styled';

const StyledLink = ({ href, to, children, ...props }) =>
  href === '' ? (
    <StyledGatsbyLink to={to} {...props}>
      <Span>{children}</Span>
    </StyledGatsbyLink>
  ) : (
    <ExternalLink href={href} {...props}>
      <Span>{children}</Span>
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
