import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'src/components/Layout';
import BlogPost from 'src/components/BlogPost';
import SEO from 'src/components/SEO';

class BlogPostTemplate extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          subtitle: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
        html: PropTypes.string.isRequired,
      }),
    }),
  };

  componentDidMount() {
    const anchorHeadings = Array.from(document.querySelectorAll('a.heading'));
    anchorHeadings.forEach((element) =>
      element.setAttribute('aria-hidden', 'true'),
    );
  }

  render() {
    const {
      markdownRemark: { frontmatter, html },
    } = this.props.data;

    const { title, subtitle, path, date, image } = frontmatter;

    return (
      <Layout>
        <SEO
          title={title}
          description={subtitle}
          pathname={path}
          image={image ? image.childImageSharp.resize.src : ''}
          article={true}
        />
        <BlogPost title={title} subtitle={subtitle} html={html} date={date} />
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
        path
        image {
          childImageSharp {
            resize {
              height
              width
              src
            }
          }
        }
      }
    }
  }
`;

export default BlogPostTemplate;
