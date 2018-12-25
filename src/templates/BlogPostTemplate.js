import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogPost from 'src/components/BlogPost';

const BlogPostTemplate = ({ data }) => <BlogPost data={data} />;

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date
      }
    }
  }
`;

export default BlogPostTemplate;
