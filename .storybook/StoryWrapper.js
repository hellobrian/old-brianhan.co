import React from 'react';
import styled from 'styled-components';
import '../src/components/Layout/index.css';

export const StyledStoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default (storyFn) => (
  <StyledStoryWrapper>{storyFn()}</StyledStoryWrapper>
);
