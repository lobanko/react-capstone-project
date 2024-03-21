import logo from './logo.svg';
import restauranfood from './assets/restauranfood.jpg';
import './App.css';
import {Fragment} from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/book" element={<BookingPage/>}></Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
