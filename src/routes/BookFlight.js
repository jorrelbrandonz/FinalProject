import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "./BookFlightStyles.css";
import airport from '../assets/airport2.jpg';
import Hero from "../components/Hero"

function BookFlight() {
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [paymentClicked, setPaymentClicked] = useState(false);


    function openPopUp(flight) {
        setSelectedFlight(flight);
    }

    function closePopUp() {
        setSelectedFlight(null);
        setPaymentMethod(null)
        setPaymentClicked(null); 
        const blur = document.getElementById("blur");
        blur.classList.remove("active");
    }

    function handleKeyDown(event) {
        if (event.key === "Escape") {
            closePopUp();
        }
    }

    function handlePaymentClick() {
        setPaymentClicked(true); // set paymentClicked to true when payment button is clicked
    }
    
    

    useEffect(() => {
        let popupConfirmation = document.querySelector(".popupConfirmation")
        if (popupConfirmation) {
            if (selectedFlight && !paymentClicked) { // check if payment button has not been clicked
                popupConfirmation.classList.add("open-popup");
                popupConfirmation.scrollIntoView({ behavior: "smooth" });
                const blur = document.getElementById("blur");
                blur.classList.toggle("active");
            } else {
                popupConfirmation.classList.remove("open-popup");
                const blur = document.getElementById("blur");
                blur.classList.remove("active");
            }
        }
    }, [selectedFlight, paymentClicked]);

    useEffect(() => {
        let popupPaymentOption = document.querySelector(".popupPaymentOption")
        if (popupPaymentOption) {
            if (paymentClicked && selectedFlight) { // check if payment button has been clicked and flight has been selected
                popupPaymentOption.classList.add("open-popup");
                popupPaymentOption.scrollIntoView({ behavior: "smooth" });
                const blur = document.getElementById("blur");
                blur.classList.toggle("active");
            } else {
                popupPaymentOption.classList.remove("open-popup");
                const blur = document.getElementById("blur");
                blur.classList.remove("active");
            }
        }
    }, [selectedFlight, paymentClicked]);

    window.addEventListener("keydown", handleKeyDown);

    const flights = [{
        departureAirport: "JFK",
        departureTime: "9:00 am",
        arrivalAirport: "LAX",
        arrivalTime: "12:30 pm",
        flightNumber: "AA123",
        airline: "American Airlines",
        price: "$250",
        seatAvailability: "5 seats left",
        class: "Economy",
    },

    {
        departureAirport: "AFK",
        departureTime: "8:00 am",
        arrivalAirport: "LAC",
        arrivalTime: "12:30 pm",
        flightNumber: "33123",
        airline: "Philippine Airlines",
        price: "$50",
        seatAvailability: "10 seats left",
        class: "Business",
    },
    {
        departureAirport: "AFK",
        departureTime: "8:00 am",
        arrivalAirport: "LAC",
        arrivalTime: "12:30 pm",
        flightNumber: "f",
        airline: "Philippine Airlines",
        price: "$50",
        seatAvailability: "10 seats left",
        class: "Business",
    }];

    return (
        <>
        <img className="airbg" alt="img" src={airport} />
        <div className="book2style">
            <div className="table-container" id="blur">
                <h1 className="heading"> BOOK YOUR FLIGHT TODAY! </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Departure Airport</th>
                            <th>Departure Time</th>
                            <th>Arrival Airport</th>
                            <th>Arrival Time</th>
                            <th>Flight Number</th>
                            <th>Airline</th>
                            <th>Price</th>
                            <th>Seat Availability</th>
                            <th>Class</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight) => (
                            <tr key={flight.flightNumber}>
                                <td data-label="Departure Airport">{flight.departureAirport}</td>
                                <td data-label="Departure Time">{flight.departureTime}</td>
                                <td data-label="Arrival Airport">{flight.arrivalAirport}</td>
                                <td data-label="Arrival Time">{flight.arrivalTime}</td>
                                <td data-label="Flight Number">{flight.flightNumber}</td>
                                <td data-label="Airline">{flight.airline}</td>
                                <td data-label="Price">{flight.price}</td>
                                <td data-label="Seat Availability">{flight.seatAvailability}</td>
                                <td data-label="Class">{flight.class}</td>
                                <td data-label=""><button className="btn" onClick={() => openPopUp(flight)}>Book Now</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            {selectedFlight && (
                <div className="popupConfirmation" id="popupConfirmation">
                    <h2>BOOK FLIGHT CONFIRMATION</h2>
                    <div className="flight-details">
                        <p><span>Flight Number:</span> {selectedFlight.flightNumber}</p>
                        <p><span>Departure:</span> {selectedFlight.departureAirport} - {selectedFlight.departureTime}</p>
                        <p><span>Arrival:</span> {selectedFlight.arrivalAirport} - {selectedFlight.arrivalTime}</p>
                        <p><span>Price:</span> {selectedFlight.price}</p>
                        <p><span>Seat Availability:</span> {selectedFlight.seatAvailability}</p>
                    </div>
                    <div className="buttons">
                        <button className="cancelButton" onClick={() => { closePopUp() }}>Cancel</button>
                        <button className="proceedPaymentButton" onClick={handlePaymentClick}>Proceed to Payment</button>
                    </div>
                </div>
            )}
            {selectedFlight && paymentClicked && (
                <div className="popupPaymentOption">
                    <h2>PAYMENT METHOD</h2>
                    <div className="flight-details">
                        <p><span>Flight Number:</span> {selectedFlight.flightNumber}</p>
                        <p><span>Price:</span> {selectedFlight.price}</p>
                        <p><span>Seat Availability:</span> {selectedFlight.seatAvailability}</p>
                    </div>
                    <div className="popupPaymentMethods">
                        <div className="popupPaymentMethod1">
                            <input type="radio" id="creditCard" name="paymentMethod" value="CREDIT CARD" onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label htmlFor="creditCard">Credit Card</label>
                        </div>
                        <div className="popupPaymentMethod2">
                            <input type="radio" id="gcash" name="paymentMethod" value="GCASH" onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label htmlFor="paypal">GCASH</label>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="cancelButton" onClick={() => { closePopUp() }}>Cancel</button>
                        <button className="payButton">Pay Now</button>
                    </div>
                </div>
            )}
        </>
    );
}
export default BookFlight;