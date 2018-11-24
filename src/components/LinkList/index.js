import React from 'react';
import styled from 'styled-components';
import LinkListItem from 'src/components/LinkListItem';
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
      <LinkListItem href={LINKS.github} text={`GitHub`} />
    </li>
    <li>
      <LinkListItem href={LINKS.linkedin} text={`LinkedIn`} />
    </li>
    <li>
      <LinkListItem href={LINKS.blog} text={`Medium`} />
    </li>
    <li>
      <LinkListItem href={LINKS.email} text={`thisisbrianhan@gmail.com`} />
    </li>
  </StyledList>
);

export default LinkList;
