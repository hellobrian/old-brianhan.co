import React from 'react';
import styled from 'styled-components';
import StyledLink from 'src/components/StyledLink';
import { LINKS } from 'src/utils';

export const StyledList = styled.ul`
  list-style-type: none;
  margin-left: 1rem;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }
  @media screen and (min-width: 800px) {
    width: 500px;
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

const LinkList = () => (
  <StyledList>
    <li>
      <StyledLink className="link" href={LINKS.github}>
        GitHub
      </StyledLink>
    </li>
    <li>
      <StyledLink className="link" href={LINKS.linkedin}>
        LinkedIn
      </StyledLink>
    </li>
    <li>
      <StyledLink className="link" href={LINKS.email}>
        thisisbrianhan@gmail.com
      </StyledLink>
    </li>
  </StyledList>
);

export default LinkList;
