
import {Fragment, useState} from "react";
import Header from "./conponents/Header";
import './BookingPage.css';


function BookingPage() {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState("17:00");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const dateChange = (event) => {
        setDate(event.target.value);
        const dmlo = fetchAPI(event.target.value);
        console.log(dmlo);
    };
    const timeChange = (event) => {
        setTime(event.target.value);
    };
    const numberOfGuestsChange = (value) => {
        setNumberOfGuests(value)
    };
    const occasionChange = (value) => {
        setNumberOfGuests(value)
    }
    const getIsFormValid = () => {
        return (
            date &&
            time &&
            numberOfGuests
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
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={dateChange}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time "
                            value={time}
                            onChange={timeChange}
                >
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfGuests} onChange={numberOfGuestsChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={occasionChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" disabled={!getIsFormValid()}/>
            </form>
        </>

    );
}

export default BookingPage;
