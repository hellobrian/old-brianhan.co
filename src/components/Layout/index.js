import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SEO from 'src/components/SEO';
import CircleSvg from 'src/components/CircleSvg';
import LinkList from 'src/components/LinkList';
import { rem } from 'src/utils';
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
`;

export default ({ children }) => (
  <>
    <SEO />
    <PageRoot>
      <CircleSvg />
      <Main>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        {children}
        <LinkList />
      </Main>
    </PageRoot>
  </>
);
