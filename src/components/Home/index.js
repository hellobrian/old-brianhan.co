import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'src/components/Layout/';
import BlogCard from 'src/components/BlogCard';
import { NameWrapper } from './styled';
import { COMMON_BREAKPOINTS } from 'src/utils';

export const text = {
  name: `Brian Han`,
  description: `is a front-end developer.`,
  mission: `Building and writing things for people on the internet.`,
};

export const Name = () => (
  <NameWrapper>
    <div
      css={`
        color: var(--blue);
      `}>
      {text.name}
    </div>
    <div>{text.description}</div>
    <div>{text.mission}</div>
  </NameWrapper>
);

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <Name />
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
