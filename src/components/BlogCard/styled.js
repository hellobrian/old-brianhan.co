import styled from 'styled-components';

export const Card = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 4rem;
  min-width: 400px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 400px) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 800px) {
    box-shadow: var(--card-shadow);
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;
  }
`;
