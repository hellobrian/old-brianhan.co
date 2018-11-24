import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout/';

export const H1 = styled.h1`
  display: flex;
  flex-direction: column;
`;

export const NameSpan = styled.span`
  color: rgb(45, 116, 218);
`;

export default () => (
  <Layout>
    <H1>
      <NameSpan>Brian Han</NameSpan> is a front-end developer &mdash; building
      things for people on the internet.
    </H1>
  </Layout>
);
