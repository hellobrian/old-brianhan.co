import React from 'react';
import styled from 'styled-components';
import StyledLink from 'src/components/StyledLink';
import { COMMON_BREAKPOINTS, LINKS } from 'src/utils';

export const StyledList = styled.ul`
  list-style-type: none;
  margin-left: 1rem;
  padding: 0;
  width: 100%;

  ${COMMON_BREAKPOINTS}
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
