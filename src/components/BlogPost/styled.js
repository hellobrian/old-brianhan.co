import styled from 'styled-components';
import { COMMON_BREAKPOINTS } from 'src/utils';

export const H1 = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1200px) {
    width: 700px;
  }

  ${COMMON_BREAKPOINTS};
`;

export const Title = styled.h2`
  font-size: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 100%;

  @media screen and (min-width: 800px) {
    font-size: 2.5rem;
  }

  ${COMMON_BREAKPOINTS};
`;

export const SubTitle = styled.h3`
  font-style: italic;
  font-size: 1.5rem;
  font-weight: 500;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 100%;

  @media screen and (min-width: 800px) {
    font-size: 1.5rem;
  }

  ${COMMON_BREAKPOINTS};
`;

export const Content = styled.div`
  width: 100%;

  ${COMMON_BREAKPOINTS};
`;
