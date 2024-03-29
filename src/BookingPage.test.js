import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

test('renders booking page', () => {
  render(<BookingPage />);
  const title = screen.getByText("Choose date");
  expect(title).toBeInTheDocument();
});
