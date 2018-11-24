import React from 'react'
import { LINKS } from '../../constants'
import LinkListItem from '../LinkListItem'
import styled from 'styled-components'

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  font-family: 'Karla', sans-serif;
  list-style-type: none;
  display: flex;

  & > li {
    padding-right: 0.5rem;
  }
`

const LinkList = () => (
  <>
    <StyledList>
      <li>
        <LinkListItem href={LINKS.github} text={`GitHub`} />
      </li>
      <li>
        <LinkListItem href={LINKS.linkedin} text={`LinkedIn`} />
      </li>
    </StyledList>
    <StyledList>
      <li>
        <LinkListItem href={LINKS.blog} text={`Medium`} />
      </li>
      <li>
        <LinkListItem href={LINKS.email} text={`thisisbrianhan@gmail.com`} />
      </li>
    </StyledList>
  </>
)

export default LinkList
