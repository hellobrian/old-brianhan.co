import React from 'react';
import { graphql, Link } from 'gatsby';
import { Bio, Pagination, Layout, SEO } from '../components';
import { rhythm, scale } from '../utils/typography';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const post = data.markdownRemark;
  const { title, description, date } = post.frontmatter;
  const { excerpt, html } = post;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description={description || excerpt} />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}>
            {title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}>
            {date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <Pagination>
        {previous && !previous.frontmatter.draft && (
          <Link to={previous.fields.slug} rel="prev">
            <span>← {previous.frontmatter.title}</span>
          </Link>
        )}

        {next && !next.frontmatter.draft && (
          <Link to={next.fields.slug} rel="next">
            <span>{next.frontmatter.title} →</span>
          </Link>
        )}
      </Pagination>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { draft: { eq: false } }
    ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
