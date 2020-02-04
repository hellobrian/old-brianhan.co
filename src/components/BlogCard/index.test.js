import React from 'react';
import { render } from '@testing-library/react';
import BlogCard from './index';

describe('BlogCard', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BlogCard
        title="title"
        subtitle="subtitle"
        excerpt="excerpt"
        date="date"
        to="/"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
