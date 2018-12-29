import React from 'react';
import PropTypes from 'prop-types';
import BlogCard from 'src/components/BlogCard';

export const otherBlogPosts = [
  {
    date: `26 February 2018`,
    title: `Hot Reloading with create-react-app without ejecting`,
    subtitle: `...and without react-app-rewired`,
    href: `https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642`,
  },
];

export const flattenEdgesList = (edges) =>
  edges.map((edge) => {
    const {
      node: {
        id,
        excerpt,
        frontmatter: { title, date, subtitle, path },
      },
    } = edge;
    return { id, excerpt, title, date, subtitle, path };
  });

export const sortBlogsByDate = (blogs, otherBlogs) => {
  return [...blogs, ...otherBlogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
};

const BlogList = ({ edges }) => {
  const flattenBlogs = flattenEdgesList(edges);

  const blogs = sortBlogsByDate(flattenBlogs, otherBlogPosts);

  return blogs.map((blog, index) => (
    <BlogCard
      key={blog.id || `externalBlog-${index}`}
      date={blog.date}
      excerpt={blog.excerpt}
      subtitle={blog.subtitle}
      title={blog.title}
      to={blog.path}
      href={blog.href}
    />
  ));
};

BlogList.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlogList;
