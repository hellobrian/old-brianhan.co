import React from 'react';
import { render } from 'react-testing-library';
import CircleSvg from './index';

describe('CircleSvg', () => {
  it('renders correctly', () => {
    const { container } = render(<CircleSvg />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
