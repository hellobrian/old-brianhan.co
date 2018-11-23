import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledLink = styled.a`
  text-decoration: none;
  background-repeat: no-repeat;
  background-image: linear-gradient(150deg, #c3cfe2 0%, #f5f7fa 100%);
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  background-size: 100% 0.3rem;
  background-position: 0 110%;
  transition: background-size 100ms cubic-bezier(0.5, 0, 0.1, 1);
  color: currentColor;

  &:hover,
  &:focus {
    background-size: 100% 100%;
    background-image: linear-gradient(180deg, #f5f7fa 0%, #c3cfe2 100%);
    background-image: linear-gradient(-20deg, #d887fe 0%, #78e6fe 100%);
  }

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const LinkListItem = ({ href, text }) => (
  <StyledLink href={href}>{text}</StyledLink>
)

LinkListItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default LinkListItem
