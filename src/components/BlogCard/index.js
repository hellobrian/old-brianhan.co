import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledLink from 'src/components/StyledLink';
import { rem } from 'src/utils';

const Root = styled.div`
  display: block;
  /* width: ${rem(350)}; */
`;

const Title = styled.h2`
  /* white-space: nowrap;
  overflow: hidden; */

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Date = styled.p`
  /* margin-bottom: ${rem(10)}; */
  /* color: #ccc; */
`;

const Excerpt = styled.p`
  /* font-family: 'Karla', sans-serif; */
`;

const BlogCard = ({ title, excerpt, date, to }) => {
  return (
    <Root>
      <Title>
        <StyledLink to={to}>{title}</StyledLink>
      </Title>
      <Date>{date}</Date>
      <Excerpt>{excerpt}</Excerpt>
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
