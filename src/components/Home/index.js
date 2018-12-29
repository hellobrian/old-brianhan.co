import React from 'react';
import PropTypes from 'prop-types';
import BlogList from 'src/components/BlogList/';
import Layout from 'src/components/Layout/';
import { NameWrapper } from './styled';
import { COMMON_BREAKPOINTS } from 'src/utils';

export const text = {
  name: `Brian Han`,
  description: `is a front-end developer.`,
  mission: `Building and writing things for people on the internet.`,
};

export const Name = () => (
  <NameWrapper>
    <div
      css={`
        color: var(--blue);
      `}>
      {text.name}
    </div>
    <div>{text.description}</div>
    <div>{text.mission}</div>
  </NameWrapper>
);

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <Name />
    <div
      css={`
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        ${COMMON_BREAKPOINTS};

        @media screen and (min-width: 1600px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 4rem;
          width: 1000px;
        }
      `}>
      <BlogList edges={edges} />
    </div>
  </Layout>
);

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
