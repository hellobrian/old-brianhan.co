import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledLink = styled.a`
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

const LinkListItem = ({ href, text }) => (
  <StyledLink href={href}>{text}</StyledLink>
);

LinkListItem.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

LinkListItem.defaultProps = {
  href: '',
  text: '',
};

export default LinkListItem;
