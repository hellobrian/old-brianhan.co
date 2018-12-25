import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from 'src/components/StyledLink';
import { Root, Title, Date } from './styled';

const BlogCard = ({ title, subtitle, date, to }) => {
  return (
    <Root>
      <Title>
        <StyledLink to={to}>{title}</StyledLink>
      </Title>
      <Date>{date}</Date>
      <p>{subtitle}</p>
    </Root>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogCard;
