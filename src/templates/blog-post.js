import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'src/components/Layout';
import styled from 'styled-components';
import './index.css';

export const Title = styled.h1`
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
    <Layout className="blog">
      <Title>{post.frontmatter.title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
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
