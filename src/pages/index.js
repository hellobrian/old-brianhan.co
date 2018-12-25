import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HomePage from 'src/components/HomePage';

const IndexPage = ({ data }) => <HomePage data={data} />;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            # date(fromNow: true)
            date(formatString: "DD MMMM YYYY", locale: "us")
            excerptCustom
            publish
          }
        }
      }
    }
  }
`;
