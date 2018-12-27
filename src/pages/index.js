import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Home from 'src/components/Home';

const HomePage = ({ data }) => <Home data={data} />;

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            # date(fromNow: true)
            date(formatString: "DD MMMM YYYY", locale: "us")
            subtitle
            publish
            path
          }
        }
      }
    }
  }
`;
