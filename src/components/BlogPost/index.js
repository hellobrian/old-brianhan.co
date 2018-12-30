import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { HomeLink, Title, SubTitle, Content } from './styled';
import './index.css';

export const text = {
  name: `Brian Han`,
};

const BlogPost = ({ title, subtitle, html }) => (
  <div className="blog">
    <HomeLink>
      <Link to="/">{text.name}</Link>
    </HomeLink>
    <Title>{title}</Title>
    {subtitle && <SubTitle>{subtitle}</SubTitle>}
    <Content dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default BlogPost;
