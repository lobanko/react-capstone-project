import {fireEvent, render, screen} from '@testing-library/react';
import BookingPage from './BookingPage';

test('renders booking page date error', () => {
  render(<BookingPage />);
  const title = screen.getByText("book a table");
  expect(title).toBeInTheDocument();

  const date = screen.getByLabelText("Choose date");
  expect(date).toBeInTheDocument();
  const dateInput = screen.getByTestId('res-date');
  expect(dateInput).toBeInTheDocument();
  fireEvent.change(dateInput, { target: { value: '123' } })

  const errorMessage = screen.getByText("date should be in future");
  expect(errorMessage).toBeInTheDocument();
});

test('renders booking page number of guests error', () => {
  render(<BookingPage />);
  const guestsInput = screen.getByTestId('guests');
  expect(guestsInput).toBeInTheDocument();
  fireEvent.change(guestsInput, { target: { value: -3 } })

  const errorMessage = screen.getByText("number of suests should be between 1 and 10");
  expect(errorMessage).toBeInTheDocument();
});


test('renders booking page flow', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<BookingPage />);
  const date = screen.getByLabelText("Choose date");
  expect(date).toBeInTheDocument();
  const dateInput = screen.getByTestId('res-date');
  expect(dateInput).toBeInTheDocument();
  fireEvent.change(dateInput, { target: { value: '2028-12-15' } })


  const guestsInput = screen.getByTestId('guests');
  expect(guestsInput).toBeInTheDocument();
  fireEvent.change(guestsInput, { target: { value: 3 } })

  const submitButton = screen.getByText("Make Your reservation");
  expect(submitButton).toBeInTheDocument();
  fireEvent.click(submitButton);
  expect(window.alert).toBeCalledWith("Booking created!");
});