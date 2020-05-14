import React from 'react';
import { render, screen } from '@testing-library/react';
import { FancyLink } from './FancyLink';

test(`FancyLink should render correctly`, () => {
  render(
    <FancyLink href="/" data-testid="FancyLink">
      So Fancy
    </FancyLink>,
  );

  const result = screen.getByRole('link', { name: /so fancy/i });
  expect(result).toBeInTheDocument();
});
