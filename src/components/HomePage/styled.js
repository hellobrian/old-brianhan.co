import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const HomePageRoot = styled.div`
  margin: 0 auto;
  height: 100vh;
  animation-name: ${fadein};
  animation-duration: 3s;

  @media (min-width: 400px) {
    width: 80%;
  }

  @media (min-width: 600px) {
    width: 70%;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  @media (min-width: 800px) {
    width: 500px;
  }
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
  padding: 0 0.5rem;
  width: 95%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
  z-index: 1;
`

export const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: 'Karla', sans-serif;
  letter-spacing: -0.07rem;
  margin-bottom: 1.5rem;
  line-height: 1.25;
  font-size: 1.5rem;
  /* padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 2rem 0 rgba(0, 0, 0, 0.1); */

  @media (min-width: 720px) {
    font-size: 2.75rem;
  }
`

export const NameSpan = styled.span`
  color: rgb(45, 116, 218);
`

export const Paragraph = styled.p`
  font-family: 'Merriweather', serif;
  margin-bottom: 1rem;
  line-height: 1.5;
`
