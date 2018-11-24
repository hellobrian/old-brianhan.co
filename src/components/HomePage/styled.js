import styled, { keyframes } from 'styled-components'
import { rem } from '../../utils'

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const HomePageRoot = styled.div`
  height: 100vh;
  animation-name: ${fadein};
  animation-duration: 3s;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CircleSvg = styled.svg`
  background-image: linear-gradient(
    to top,
    #ff9a9e 0%,
    #fecfef 99%,
    #fecfef 100%
  );
  width: 7rem;
  height: 7rem;
  position: fixed;
  border-radius: 50%;
  top: -1rem;
  left: -1rem;
  animation-name: ${fadein};
  animation-duration: 3s;
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
