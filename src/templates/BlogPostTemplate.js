import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from 'src/components/Layout';
import { HomeLink, Title, SubTitle } from './styled';
import { COMMON_BREAKPOINTS } from 'src/utils';
import './index.css';

class BlogPostTemplate extends React.Component {
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
    return (
      <Layout>
        <div className="blog">
          <HomeLink>
            <Link to="/">Brian Han</Link>
          </HomeLink>
          <Title>{frontmatter.title}</Title>
          {frontmatter.subtitle && <SubTitle>{frontmatter.subtitle}</SubTitle>}
          <div
            css={`
              width: 100%;
              ${COMMON_BREAKPOINTS}
            `}
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
