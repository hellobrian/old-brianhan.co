import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'src/utils';

const Root = styled.div`
  display: grid;
  width: ${rem(350)};
`;

const Title = styled.h3`
  color: currentColor;
`;

const Date = styled.span`
  margin-bottom: ${rem(10)};
  color: #ccc;
`;

const Excerpt = styled.p`
  font-family: 'Karla', sans-serif;
`;

const BlogCard = ({ title, excerpt, fromNow }) => (
  <Root>
    <Title>{title}</Title>
    <Date>{fromNow}</Date>
    <Excerpt>{excerpt}</Excerpt>
  </Root>
);

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  fromNow: PropTypes.string.isRequired,
};

export default BlogCard;
