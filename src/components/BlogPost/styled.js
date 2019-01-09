import styled from 'styled-components';
import { COMMON_BREAKPOINTS } from 'src/utils';

export const HomeLink = styled.p`
  font-family: 'Karla', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  padding-left: 0.5rem;

  @media screen and (min-width: 600px) {
    padding-left: 0;
  }

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }

  ${COMMON_BREAKPOINTS};
`;

export const Title = styled.h1`
  font-size: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 100%;

  @media screen and (min-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media screen and (min-width: 800px) {
    font-size: 2.5rem;
  }

  ${COMMON_BREAKPOINTS};
`;

export const SubTitle = styled.p`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Karla', sans-serif;
  font-size: 1.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 100%;

  @media screen and (min-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 800px) {
    font-size: 1.25rem;
  }

  ${COMMON_BREAKPOINTS};
`;

export const Content = styled.div`
  width: 100%;

  span.gatsby-resp-image-wrapper {
    width: 100vw;
    left: -0.5rem;
  }

  ${COMMON_BREAKPOINTS}
`;
