import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from 'src/components/StyledLink';

const BlogCard = ({ title, subtitle, excerpt, date, to, href }) => {
  return (
    <div
      css={`
        padding-left: 2rem;
        padding-right: 2rem;
        margin-bottom: 4rem;
        min-width: 400px;

        &:last-child {
          margin-bottom: 0;
        }

        @media screen and (min-width: 400px) {
          margin-bottom: 1rem;
        }

        @media screen and (min-width: 800px) {
          box-shadow: var(--card-shadow);
          padding-bottom: 1rem;
          padding-left: 2rem;
          padding-right: 2rem;
          padding-top: 3rem;
        }
      `}>
      <h2
        css={`
          line-height: 1.5;
          padding-bottom: 0;
          margin-bottom: 0;

          @media (max-width: 800px) {
            font-size: 1.25rem;
          }
        `}>
        <StyledLink to={to} href={href}>
          {title}
        </StyledLink>
      </h2>
      <p
        css={`
          font-family: 'Karla', sans-serif;
          margin-top: 5px;
          margin-bottom: 5px;
        `}>
        {date}
      </p>
      <p>{subtitle || excerpt}</p>
    </div>
  );
};

BlogCard.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
};

BlogCard.defaultProps = {
  to: '',
  href: '',
};

export default BlogCard;
