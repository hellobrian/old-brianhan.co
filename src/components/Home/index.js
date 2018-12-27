import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'src/components/Layout/';
import BlogCard from 'src/components/BlogCard';
import Name from 'src/components/Name';
import { NameWrapper, Blogs } from './styled';

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <NameWrapper>
      <Name>Brian Han</Name>
      <div>is a front-end developer.</div>
      <div>Building things for people on the internet.</div>
    </NameWrapper>
    <Blogs>
      {edges.map(
        ({
          node: {
            id,
            excerpt,
            frontmatter: { title, date, subtitle, publish, path },
          },
        }) =>
          publish && (
            <BlogCard
              key={id}
              date={date}
              excerpt={excerpt}
              subtitle={subtitle}
              title={title}
              to={path}
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
