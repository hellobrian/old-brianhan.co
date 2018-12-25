import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from 'src/components/Layout';
import { BREAKPOINTS } from 'src/utils';
import './index.css';

export const H1 = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1200px) {
    width: 700px;
  }

  ${BREAKPOINTS.minWidth600};
  ${BREAKPOINTS.minWidth800};
  ${BREAKPOINTS.minWidth1200};
`;

export const Title = styled.h2`
  font-size: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 500px;
  }

  @media screen and (min-width: 800px) {
    font-size: 2.5rem;
    width: 600px;
  }

  @media screen and (min-width: 1200px) {
    width: 700px;
  }
`;

export const SubTitle = styled.h3`
  font-style: italic;
  font-size: 1.5rem;
  font-weight: 500;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 500px;
  }

  @media screen and (min-width: 800px) {
    font-size: 1.5rem;
    width: 600px;
  }

  @media screen and (min-width: 1200px) {
    width: 700px;
  }
`;

export const Content = styled.div`
  width: 100%;

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

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="blog">
        <H1>
          <Link to="/">Brian Han</Link>
        </H1>
        <Title>{post.frontmatter.title}</Title>
        <SubTitle>{post.frontmatter.excerptCustom}</SubTitle>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;
