import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from 'src/components/StyledLink';
import { Card } from './styled';

const BlogCard = ({ title, subtitle, excerpt, date, to, href }) => {
  return (
    <Card>
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
    </Card>
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
