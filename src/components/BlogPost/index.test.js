import React from 'react';
import { render } from '@testing-library/react';
import BlogPost from './index';

describe('BlogPost', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BlogPost title="title" subtitle="subtitle" html="<div>html</div>" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
