import React from 'react'
import links from '../../constants/links'
import LinkListItem from '../LinkListItem'
import { StyledList } from './styled'

const LinkList = () => (
  <>
    <StyledList>
      <li>
        <LinkListItem href={links.github} text={`GitHub`} />
      </li>
      <li>
        <LinkListItem href={links.linkedin} text={`LinkedIn`} />
      </li>
    </StyledList>
    <StyledList>
      <li>
        <LinkListItem href={links.blog} text={`Medium`} />
      </li>
      <li>
        <LinkListItem href={links.email} text={`thisisbrianhan@gmail.com`} />
      </li>
    </StyledList>
  </>
)

export default LinkList
