import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from 'src/components/Layout';
import { HomeLink, Title, SubTitle, Content } from './styled';
import './index.css';

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const anchorHeadings = Array.from(document.querySelectorAll('a.heading'));
    anchorHeadings.forEach((element) =>
      element.setAttribute('aria-hidden', 'true'),
    );
  }
  render() {
    const { data } = this.props;
    const {
      markdownRemark: { frontmatter, html },
    } = data;
    return (
      <Layout>
        <div className="blog">
          <HomeLink>
            <Link to="/">Brian Han</Link>
          </HomeLink>
          <Title>{frontmatter.title}</Title>
          {frontmatter.subtitle && <SubTitle>{frontmatter.subtitle}</SubTitle>}
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    );
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

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
