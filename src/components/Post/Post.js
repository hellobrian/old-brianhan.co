import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FancyLink } from '../FancyLink/FancyLink';
import { rhythm } from '../../utils/typography';
import './Post.css';

export const Post = (props) => {
  const { children, date, updated, slug, title, featuredImage } = props;

  return (
    <article
      data-testid="Post"
      className="Post"
      style={{
        marginBottom: rhythm(2),
        paddingTop: rhythm(1.5),
        paddingLeft: rhythm(1),
        paddingRight: rhythm(1),
        paddingBottom: rhythm(1.5),
      }}>
      <header className="Post__Header">
        <h2 className="Post__H2">
          <FancyLink to={slug}>{title}</FancyLink>
        </h2>
        {updated ? (
          <small className="Post__Date">
            <strong>Updated:</strong> {updated}{' '}
            <span role="img" aria-label="updated post">
              🎉
            </span>
          </small>
        ) : (
          <small className="Post__Date">{date}</small>
        )}
      </header>
      <section className="section">{children}</section>
      {featuredImage && (
        <Img
          className="img"
          fluid={featuredImage.childImageSharp.fluid}
          alt=""
        />
      )}
    </article>
  );
};

Post.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
