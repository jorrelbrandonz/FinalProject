import { useState, useEffect } from "react"
import "./BookFlightStyles.css"
import airport from '../assets/airport2.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

function BookFlight() {
    const [selectedFlight, setSelectedFlight] = useState(null)
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [paymentClicked, setPaymentClicked] = useState(false)
    const [gcashClicked, setGCASHClicked] = useState(false)
    const [creditCardClicked, setCreditCardClicked] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [gcashNumber, setGCASHNumber] = useState("")
    const [nameOnCard, setNameOnCard] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [expirationDate, setExpirationDate] = useState("")
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const randomNum = Math.floor(1000 + Math.random() * 9000);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        alert("Successful booking!");
        closePopUp();
        emailjs.sendForm('service_wwc6qf6', 'template_rcxtjxc', form.current, 'cyXE5j-r-pA6DZ60s')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    function openPopUp(flight) {
        setSelectedFlight(flight)
    }

    function closePopUp() {
        setSelectedFlight(null)
        setPaymentMethod(null)
        setPaymentClicked(false)
        setGCASHClicked(false)
        setCreditCardClicked(false)
        setShowPopup(false)
        const blur = document.getElementById("blur")
        blur.classList.remove("active")
    }

    function handleKeyDown(event) {
        if (event.key === "Escape") {
            closePopUp()
        }
    }

    const handlePaymentClick = (event) => {
        event.preventDefault();
        setPaymentClicked(true)
    }

    const handleGCASHClick = (event) => {
        event.preventDefault();
        setGCASHClicked(true)
        setPaymentMethod('GCASH');
        const blur = document.getElementById("blur")
        blur.classList.toggle("active")
    }

    const handleCreditCardClick = (event) => {
        event.preventDefault();
        setCreditCardClicked(true)
        setPaymentMethod('Credit Card');
        const blur = document.getElementById("blur")
        blur.classList.toggle("active")
    }


    const handleGCASHPayment = (event) => {
        event.preventDefault();
        setShowPopup(true);
    }

    const handleCreditCardPayment = (event) => {
        event.preventDefault();
        setShowPopup(true);
    }

    useEffect(() => {
        let popupConfirmation = document.querySelector(".popupConfirmation")
        if (popupConfirmation) {
            if (selectedFlight && !paymentClicked) {
                popupConfirmation.classList.add("open-popup")
                popupConfirmation.scrollIntoView({ behavior: "smooth" })
                const blur = document.getElementById("blur")
                blur.classList.toggle("active")
            } else {
                popupConfirmation.classList.remove("open-popup")
                const blur = document.getElementById("blur")
                blur.classList.remove("active")
            }
        }
    }, [selectedFlight, paymentClicked])

    useEffect(() => {
        let popupPaymentOption = document.querySelector(".popupPaymentOption")
        if (popupPaymentOption) {
            if (paymentClicked && selectedFlight) {
                if (gcashClicked) {
                    document.querySelector(".popupGCASH").classList.add("open-popup")
                    popupPaymentOption.scrollIntoView({ behavior: "smooth" })
                    const blur = document.getElementById("blur")
                    blur.classList.toggle("active")
                } else if (creditCardClicked) {
                    document.querySelector(".popupCreditCard").classList.add("open-popup")
                    const blur = document.getElementById("blur")
                    blur.classList.toggle("active")
                } else {
                    popupPaymentOption.classList.add("open-popup")
                    popupPaymentOption.scrollIntoView({ behavior: "smooth" })
                    const blur = document.getElementById("blur")
                    blur.classList.toggle("active")
                }
            } else {
                popupPaymentOption.classList.remove("open-popup")
                const blur = document.getElementById("blur")
                blur.classList.remove("active")
            }
        }
    }, [selectedFlight, paymentClicked, gcashClicked, creditCardClicked, showPopup])

    window.addEventListener("keydown", handleKeyDown)

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/FinalProjectBackEnd/Flights.php/')
            .then(response => {
                setFlights(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <img className="airbg" alt="img" src={airport} />
            <div className="book2style">
                <div className="table-container" id="blur">
                    <h1 className="heading"> BOOK YOUR FLIGHT TODAY! </h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Flight Number</th>
                                <th>Departure Airport</th>
                                <th>Departure Time</th>
                                <th>Arrival Airport</th>
                                <th>Arrival Time</th>
                                <th>Airline</th>
                                <th>Price</th>
                                <th>Seat Availability</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {flights.map((flight) => (
                                <tr key={flight.FlightNumber}>
                                    <td data-label="FlightNumber">{flight.FlightNumber}</td>
                                    <td data-label="Departure Airport">{flight.DepartureAirport}</td>
                                    <td data-label="Departure Time">{flight.Departure}</td>
                                    <td data-label="Arrival Airport">{flight.ArrivalAirport}</td>
                                    <td data-label="Arrival Time">{flight.Arrival}</td>
                                    <td data-label="Airline">{flight.AirplaneType}</td>
                                    <td data-label="Price">{'$' + flight.TicketPrice}</td>
                                    <td data-label="Seat Availability">{flight.Passengers}</td>
                                    <td data-label="">
                                        <button className="btn" onClick={() => openPopUp(flight)}>Book Now</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedFlight && (
                <form onSubmit={handlePaymentClick}>
                    <div className="popupConfirmation" id="popupConfirmation">
                        <h2>BOOK FLIGHT CONFIRMATION</h2>
                        <div className="flight-details">
                            <p>
                                <span>Flight Number:</span> {selectedFlight.FlightNumber}
                            </p>
                            <p>
                                <span>Departure:</span> {selectedFlight.DepartureAirport} -{" "}
                                {selectedFlight.Departure}                  </p>
                            <p>
                                <span>Arrival:</span> {selectedFlight.ArrivalAirport} -{" "}
                                {selectedFlight.Arrival}
                            </p>
                            <p>
                                <span>Price:</span> {selectedFlight.TicketPrice}
                            </p>
                            <p>
                                <span>Seat Availability:</span> {selectedFlight.Passengers}
                            </p>
                        </div>
                        <div className="buttons">
                            <button className="cancel-btn" onClick={() => { closePopUp() }}>Cancel</button>
                            <button className="proceed-btn" type="submit">Proceed to Payment</button>
                        </div>
                    </div>
                </form>
            )}
            {paymentClicked && (
                <div className="popupPaymentOption">
                    <div className="popupPaymentOptionContents">
                        <div className="popup-header">
                            <h3>Payment Method</h3>
                            <button className="close-btn" onClick={closePopUp}>
                                &times;
                            </button>
                        </div>
                        <p>Please select a payment method:</p>
                        <div className="buttons">
                            <button className="payment-method-btn" onClick={handleGCASHClick}>GCASH</button>
                            <button className="payment-method-btn" onClick={handleCreditCardClick}>Credit Card</button>
                        </div>
                    </div>
                </div>
            )}
            {gcashClicked && (
                <div className="popupGCASH">
                    <div className="popupGCASHContents">
                        <div className="popup-header">
                            <h3>GCASH Payment</h3>
                            <button className="close-btn" onClick={closePopUp}>&times;</button>
                        </div>
                        <p>
                            Please enter your GCASH mobile number and click on the Pay button
                            to complete your booking.
                        </p>
                        <form onSubmit={handleGCASHPayment}>
                            <label>
                                Mobile Number:
                                <input
                                    type="text"
                                    value={gcashNumber}
                                    onChange={(e) => setGCASHNumber(e.target.value)}
                                    required
                                />
                            </label>
                            <button className="pay-btn" type="submit">Pay</button>
                        </form>
                    </div>
                </div>
            )}
            {creditCardClicked && (
                <div className="popupCreditCard">
                    <div className="popupCreditCardContents">
                        <div className="popup-header">
                            <h3>Credit Card Payment</h3>
                            <button className="close-btn" onClick={closePopUp}>&times;</button>
                        </div>
                        <p>
                            Please enter your Credit Card details and click on the Pay button
                            to complete your booking.
                        </p>
                        <form onSubmit={handleCreditCardPayment}>
                            <label>
                                Name on Card:
                                <input
                                    type="text"
                                    value={nameOnCard}
                                    onChange={(e) => setNameOnCard(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Card Number:
                                <input
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Expiration Date:
                                <input
                                    type="month"
                                    value={expirationDate}
                                    onChange={(e) => setExpirationDate(e.target.value)}
                                    required
                                />
                            </label>
                            <button className="pay-btn" type="submit">Pay</button>
                        </form>
                    </div>
                </div>
            )}
            {showPopup && (
                <form className="popupOV" onSubmit={sendEmail} ref={form}>
                    <h2>Please Complete Information</h2>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Passenger Name" name="name" required />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Passenger Email" name="email" required />
                    <p>Departure Time<input type="text" value={selectedFlight?.Departure} readOnly placeholder="Departure Time" name="departTime" /></p>
                    <p>Flight Number<input type="text" value={selectedFlight?.FlightNumber} readOnly placeholder="Flight Number" name="flightNumber" /></p>
                    <p>Departure Airport<input type="text" value={selectedFlight?.DepartureAirport} readOnly placeholder="Departure Airport" name="departAir" /></p>
                    <p>Price<input type="text" value={selectedFlight?.TicketPrice} readOnly placeholder="Price" name="price" /></p>
                    <p>Airline<input type="text" value={selectedFlight?.AirplaneType} readOnly placeholder="Airplane" name="airline" /></p>
                    <p>Private Code (View in E-mail)<input type="password" value={randomNum} readOnly placeholder="Password" name="privCode" /></p>
                    <button type="submit" value="Send">Confirm</button>
                    <br />
                    <p>*Flight details will be sent to the email entered in the form</p>
                </form>
            )}

        </>
    )
}
export default BookFlight