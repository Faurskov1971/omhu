import { render, screen } from '@testing-library/react';
import App from './App';

test('Look up', () => {
  render(<App />);
  const linkElement = screen.getByText(/Look up/i);
  expect(linkElement).toBeInTheDocument();
});
