import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from 'src/components/Layout';
import { HomeLink, Title, SubTitle, Content } from './styled';
import './index.css';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="blog">
        <HomeLink>
          <Link to="/">Brian Han</Link>
        </HomeLink>
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
