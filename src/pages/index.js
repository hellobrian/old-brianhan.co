import React from 'react';
import { graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { FancyLink } from '../components/FancyLink';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const slug = node.fields.slug;
        const date = node.frontmatter.date;

        return (
          <Post key={node.fields.slug} title={title} slug={slug} date={date}>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </Post>
        );
      })}
    </Layout>
  );
};

const Post = ({ title, children, slug, date }) => (
  <article>
    <header>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}>
        <FancyLink style={{ boxShadow: `none` }} to={slug}>
          {title}
        </FancyLink>
      </h3>
      <small>{date}</small>
    </header>
    <section>{children}</section>
  </article>
);

BlogIndex.Post = Post;

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
