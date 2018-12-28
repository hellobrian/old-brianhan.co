import styled from 'styled-components';
import { COMMON_BREAKPOINTS } from 'src/utils';

export const NameWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Karla', sans-serif;
  letter-spacing: -0.05rem;
  margin-bottom: 1.666rem;
  font-weight: 700;
  line-height: 1.1;
  padding-bottom: 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media screen and (min-width: 400px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1600px) {
    font-size: 3rem;
    letter-spacing: -0.1rem;
  }

  ${COMMON_BREAKPOINTS};
`;
