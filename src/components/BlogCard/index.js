import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from 'src/components/StyledLink';
import { Root, Title, Date } from './styled';

const BlogCard = ({ title, subtitle, excerpt, date, to }) => {
  return (
    <Root>
      <Title>
        <StyledLink to={to}>{title}</StyledLink>
      </Title>
      <Date>{date}</Date>
      <p>{subtitle || excerpt}</p>
    </Root>
  );
};

BlogCard.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default BlogCard;
