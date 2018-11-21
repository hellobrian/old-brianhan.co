import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink } from './styled'

const LinkListItem = ({ href, text }) => (
  <StyledLink href={href}>{text}</StyledLink>
)

LinkListItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default LinkListItem
