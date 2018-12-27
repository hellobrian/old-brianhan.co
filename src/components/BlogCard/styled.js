import styled from 'styled-components';

export const Root = styled.div`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  line-height: 1.5;
  padding-bottom: 0;

  @media (max-width: 800px) {
    font-size: 1.25rem;
  }
`;

export const Date = styled.p`
  font-family: 'Karla', sans-serif;
`;
