import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'src/components/Layout';
import BlogPost from 'src/components/BlogPost';

class BlogPostTemplate extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const anchorHeadings = Array.from(document.querySelectorAll('a.heading'));
    anchorHeadings.forEach((element) =>
      element.setAttribute('aria-hidden', 'true'),
    );
  }

  render() {
    const {
      markdownRemark: {
        frontmatter: { title, subtitle },
        html,
      },
    } = this.props.data;

    return (
      <Layout>
        <BlogPost title={title} subtitle={subtitle} html={html} />
      </Layout>
    );
  }
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        subtitle
        date(formatString: "DD MMMM YYYY", locale: "us")
      }
    }
  }
`;

export default BlogPostTemplate;
