import React from 'react';
import styled from 'styled-components';
import StyledLink from 'src/components/StyledLink';
import { rem, LINKS } from 'src/utils';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  font-family: 'Karla', sans-serif;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: ${rem(300)};

  & > li {
    padding-right: 0.5rem;
  }
`;

const LinkList = () => (
  <StyledList>
    <li>
      <StyledLink href={LINKS.github}>GitHub</StyledLink>
    </li>
    <li>
      <StyledLink href={LINKS.linkedin}>LinkedIn</StyledLink>
    </li>
    <li>
      <StyledLink href={LINKS.email}>thisisbrianhan@gmail.com</StyledLink>
    </li>
  </StyledList>
);

export default LinkList;
