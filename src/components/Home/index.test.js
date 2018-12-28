import React from 'react';
import { render } from 'react-testing-library';
import { Name, text } from './index';

describe(`Name`, () => {
  it(`renders name`, () => {
    const { getByText } = render(<Name />);
    expect(getByText(text.name)).toBeInTheDocument();
  });
});
