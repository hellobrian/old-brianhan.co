import React from 'react';
import { render } from 'react-testing-library';
import { Name, text } from './index';

describe(`Name`, () => {
  it(`renders name, description and mission`, () => {
    const { getByText } = render(<Name />);
    expect(getByText(text.name)).toBeInTheDocument();
    expect(getByText(text.description)).toBeInTheDocument();
    expect(getByText(text.mission)).toBeInTheDocument();
  });
});
