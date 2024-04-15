
import {Fragment, useReducer, useState} from "react";
import Header from "./components/Header";
import './BookingPage.css';
import {fetchAPI} from "./utils/fakeApi";
import Button from "./components/button/button";
import ErrorMessage from "./components/error_message/error-message";


function BookingPage() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return response.length !== 0 ? response : availableTimes;
    };

    const initializeTimes = (initialAvailableTimes) => [
        ...initialAvailableTimes,
        ...fetchAPI(new Date()),
    ];

    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );
    const dateChange = (event) => {
        setDate(event.target.value);
        dispatchOnDateChange(event.target.value);
    };
    const timeChange = (event) => {
        setTime(event.target.value);
    };
    const numberOfGuestsChange = (event) => {
        setNumberOfGuests(event.target.value)
    };
    const occasionChange = (value) => {
        setNumberOfGuests(value)
    }

    const isDateValid = () => {
        return date >= (new Date().toISOString().split("T")[0]);
    }

    const isNumberOfGuestsValid = () => {
        return 1<= numberOfGuests &&  numberOfGuests<11
    }
    const getIsFormValid = () => {
        return (
            date &&
            isDateValid() &&
            time &&
            numberOfGuests &&
            isNumberOfGuestsValid()
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking created!");
    };

    return (
        <>
            <Header/>

            <form className="booking-form" onSubmit={handleSubmit}>
                <h2>book a table</h2>
                <div className="form-row">
                    <div className="label-wrapper"><label htmlFor="res-date">Choose date</label></div>
                    <input type="date" id="res-date" data-testid="res-date" value={date} onChange={dateChange}/>
                    {!isDateValid() ? (
                        <ErrorMessage text="date should be in future" />
                    ) : null}
                </div>
                <div className="form-row">
                    <div className="label-wrapper"><label htmlFor="res-time">Choose time</label></div>
                        <select id="res-time "
                            value={time}
                            onChange={timeChange}
                    >       {availableTimes.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                    </select>
                </div>
                <div className="form-row">
                    <div className="label-wrapper"><label htmlFor="guests">Number of guests</label></div>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" data-testid="guests" value={numberOfGuests}
                           onChange={numberOfGuestsChange}/>
                    {!isNumberOfGuestsValid() ? (
                        <ErrorMessage text="number of suests should be between 1 and 10" />
                    ) : null}
                </div>
                <div className="form-row">
                    <div className="label-wrapper"><label htmlFor="occasion">Occasion</label></div>
                        <select id="occasion" value={occasion} onChange={occasionChange}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <Button
                    title="Make Your reservation"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!getIsFormValid()}
                />
            </form>
        </>

    );
}

export default BookingPage;
