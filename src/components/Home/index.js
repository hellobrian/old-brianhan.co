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

export const otherBlogPosts = [
  {
    date: `26 February 2018`,
    title: `Hot Reloading with create-react-app without ejecting`,
    subtitle: `...and without react-app-rewired`,
    href: `https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642`,
  },
];

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
      {otherBlogPosts.map((blog, index) => (
        <BlogCard
          key={index}
          date={blog.date}
          subtitle={blog.subtitle}
          title={blog.title}
          href={blog.href}
        />
      ))}
    </div>
  </Layout>
);

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
