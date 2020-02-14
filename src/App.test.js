import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Jack Carroll', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Jack Carroll/i);
  expect(linkElement).toBeInTheDocument();
});
