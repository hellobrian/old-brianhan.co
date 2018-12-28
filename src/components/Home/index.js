import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'src/components/Layout/';
import BlogCard from 'src/components/BlogCard';
import { NameWrapper } from './styled';
import { COMMON_BREAKPOINTS } from 'src/utils';

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <NameWrapper>
      <div
        css={`
          color: var(--blue);
        `}>
        Brian Han
      </div>
      <div>is a front-end developer.</div>
      <div>Building things for people on the internet.</div>
    </NameWrapper>
    <div
      css={`
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        ${COMMON_BREAKPOINTS};
      `}>
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
    </div>
  </Layout>
);

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
