import React from 'react';
import PropTypes from 'prop-types';
import { FancyLink } from '../FancyLink/FancyLink';
import { rhythm } from '../../utils/typography';

export const Post = ({ children, date, slug, title }) => (
  <article data-testid="Post">
    <header>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}>
        <FancyLink to={slug}>{title}</FancyLink>
      </h3>
      <small>{date}</small>
    </header>
    <section>{children}</section>
  </article>
);

Post.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
