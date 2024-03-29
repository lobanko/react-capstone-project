import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const title = screen.getByText("Little Lemon");
  expect(title).toBeInTheDocument();
});
