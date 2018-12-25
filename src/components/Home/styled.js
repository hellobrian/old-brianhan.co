import styled from 'styled-components';
import { COMMON_BREAKPOINTS } from 'src/utils';

export const H1 = styled.h1`
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media screen and (min-width: 400px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }

  ${COMMON_BREAKPOINTS};
`;

export const Blogs = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  ${COMMON_BREAKPOINTS};
`;
