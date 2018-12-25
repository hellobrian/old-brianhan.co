import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from 'src/components/Layout';
import { H1, Title, SubTitle, Content } from './styled';
import './index.css';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="blog">
        <H1>
          <Link to="/">Brian Han</Link>
        </H1>
        <Title>{post.frontmatter.title}</Title>
        <SubTitle>{post.frontmatter.subtitle}</SubTitle>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;
