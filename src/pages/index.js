import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from 'src/components/Layout/';
import BlogCard from 'src/components/BlogCard';

export const H1 = styled.h1`
  display: flex;
  flex-direction: column;
`;

export const NameSpan = styled.span`
  color: rgb(45, 116, 218);
  color: var(--blue);
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
`;

export const Blogs = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <H1>
      <NameSpan>Brian Han</NameSpan> is a front-end developer &mdash; building
      things for people on the internet.
    </H1>
    <Blogs>
      {edges.map(({ node: { id, excerpt, frontmatter: { title, date } } }) => (
        <BlogCard key={id} title={title} excerpt={excerpt} fromNow={date} />
      ))}
    </Blogs>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(fromNow: true)
          }
        }
      }
    }
  }
`;

export default IndexPage;
