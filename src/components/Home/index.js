import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from 'src/components/Layout/';
import BlogCard from 'src/components/BlogCard';
import Name from 'src/components/Name';
import { BREAKPOINTS } from 'src/utils';

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

  ${BREAKPOINTS.minWidth600};
  ${BREAKPOINTS.minWidth800};
  ${BREAKPOINTS.minWidth1200};
`;

export const Intro = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
`;

export const Blogs = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  ${BREAKPOINTS.minWidth600};
  ${BREAKPOINTS.minWidth800};
  ${BREAKPOINTS.minWidth1200};
`;

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <H1>
      <Name>Brian Han</Name>
      <div>is a front-end developer.</div>
      <div>Building things for people on the internet.</div>
    </H1>
    <Blogs>
      {edges.map(
        ({
          node: {
            id,
            excerpt,
            frontmatter: { title, date, excerptCustom, publish },
            fields: { slug },
          },
        }) =>
          publish && (
            <BlogCard
              key={id}
              title={title}
              excerpt={excerptCustom || excerpt}
              date={date}
              to={slug}
            />
          ),
      )}
    </Blogs>
  </Layout>
);

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
