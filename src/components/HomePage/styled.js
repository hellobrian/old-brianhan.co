import styled from 'styled-components'
import { rem } from '../../utils'

export const HomePageRoot = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.main`
  position: relative;
  z-index: 1;
  padding-bottom: 3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 3rem;
  width: ${rem(350)};

  @media screen and (min-width: 450px) {
    width: ${rem(400)};
  }
  @media screen and (min-width: 600px) {
    width: ${rem(450)};
  }
  @media screen and (min-width: 768px) {
    width: ${rem(550)};
  }
`

export const H1 = styled.h1`
  display: flex;
  flex-direction: column;
`

export const NameSpan = styled.span`
  color: rgb(45, 116, 218);
`
