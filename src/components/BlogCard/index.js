import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledLink from 'src/components/StyledLink';
import { rem } from 'src/utils';

const Root = styled.div`
  display: block;
  width: ${rem(350)};
`;

const Date = styled.small`
  margin-bottom: ${rem(10)};
  color: #ccc;
`;

const Excerpt = styled.p`
  font-family: 'Karla', sans-serif;
`;

const BlogCard = ({ title, excerpt, fromNow, to }) => (
  <Root>
    <h2>
      <StyledLink to={to}>{title}</StyledLink>
    </h2>
    <Date>{fromNow}</Date>
    <Excerpt>{excerpt}</Excerpt>
  </Root>
);

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  fromNow: PropTypes.string.isRequired,
};

export default BlogCard;
