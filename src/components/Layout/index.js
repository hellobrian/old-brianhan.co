import React from 'react';
import SEO from 'src/components/SEO';
import CircleSvg from 'src/components/CircleSvg';
import LinkList from 'src/components/LinkList';
import { PageRoot, Main } from './styled';
import './index.css';

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
