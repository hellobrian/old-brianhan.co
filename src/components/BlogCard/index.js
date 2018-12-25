import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledLink from 'src/components/StyledLink';

const Root = styled.div`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  @media (max-width: 800px) {
    font-size: 1.25rem;
  }
`;

const Date = styled.p`
  font-family: 'Karla', sans-serif;
`;

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
