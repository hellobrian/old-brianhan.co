import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'src/components/Layout/';
import BlogCard from 'src/components/BlogCard';
import Name from 'src/components/Name';
import { H1, Blogs } from './styled';

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <H1>
      <Name>Brian Han</Name>
      <div>is a front-end developer.</div>
      <div>Building things for people on the internet.</div>
    </H1>
    <Blogs>
      {edges.map(
        ({
          node: {
            id,
            excerpt,
            frontmatter: { title, date, excerptCustom, publish },
            fields: { slug },
          },
        }) =>
          publish && (
            <BlogCard
              key={id}
              title={title}
              excerpt={excerptCustom || excerpt}
              date={date}
              to={slug}
            />
          ),
      )}
    </Blogs>
  </Layout>
);

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
