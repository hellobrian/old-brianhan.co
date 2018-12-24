import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from 'src/components/Layout/';
import BlogCard from 'src/components/BlogCard';
import NameSpan from 'src/components/NameSpan';

export const H1 = styled.h1`
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media screen and (min-width: 400px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 500px;
  }

  @media screen and (min-width: 800px) {
    width: 600px;
    font-size: 2rem;
  }

  @media screen and (min-width: 1200px) {
    width: 700px;
  }
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

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 500px;
  }

  @media screen and (min-width: 800px) {
    width: 600px;
  }

  @media screen and (min-width: 1200px) {
    width: 700px;
  }
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <H1>
      <span>
        <NameSpan>Brian Han</NameSpan>
        <div>is a front-end developer.</div>
        <div>Building things for people on the internet.</div>
      </span>
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
          fields {
            slug
          }
          frontmatter {
            title
            # date(fromNow: true)
            date(formatString: "DD MMMM YYYY", locale: "us")
            excerptCustom
            publish
          }
        }
      }
    }
  }
`;

export default IndexPage;
