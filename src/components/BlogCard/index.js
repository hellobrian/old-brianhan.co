import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from 'src/components/StyledLink';
import { Root, Title, Date } from './styled';

const BlogCard = ({ title, excerpt, date, to }) => {
  return (
    <Root>
      <Title>
        <StyledLink to={to}>{title}</StyledLink>
      </Title>
      <Date>{date}</Date>
      <p>{excerpt}</p>
    </Root>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogCard;
