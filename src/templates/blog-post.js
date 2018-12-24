import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from 'src/components/Layout';
import NameSpan from 'src/components/NameSpan';
import styled from 'styled-components';
import './index.css';

export const NameSpanWrapper = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }

  @media screen and (min-width: 800px) {
    width: 500px;
    font-size: 2rem;
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }

  @media screen and (min-width: 800px) {
    font-size: 2.5rem;
    width: 500px;
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

export const Content = styled.div`
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }

  @media screen and (min-width: 800px) {
    width: 500px;
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="blog">
        <NameSpanWrapper>
          <Link to="/">Brian Han</Link>
        </NameSpanWrapper>
        <Title>{post.frontmatter.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
