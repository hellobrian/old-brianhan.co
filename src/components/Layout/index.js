import React from 'react';
import styled from 'styled-components';
import SEO from 'src/components/SEO';
import CircleSvg from 'src/components/CircleSvg';
import LinkList from 'src/components/LinkList';
import './index.css';

export const PageRoot = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  position: relative;
  z-index: 1;
  padding-bottom: 3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 3rem;
  width: 100%;
`;

export default ({ children }) => (
  <>
    <SEO />
    <PageRoot>
      <CircleSvg />
      <Main>{children}</Main>
      <LinkList />
    </PageRoot>
  </>
);
