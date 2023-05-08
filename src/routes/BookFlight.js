import { useState, useEffect } from "react"
import "./BookFlightStyles.css"
import airport from '../assets/airport2.jpg';

function BookFlight() {
    const [selectedFlight, setSelectedFlight] = useState(null)
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [paymentClicked, setPaymentClicked] = useState(false)
    const [gcashClicked, setGCASHClicked] = useState(false)
    const [creditCardClicked, setCreditCardClicked] = useState(false)
    const [gcashNumber, setGCASHNumber] = useState("")
    const [nameOnCard, setNameOnCard] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [expirationDate, setExpirationDate] = useState("")

    function openPopUp(flight) {
        setSelectedFlight(flight)
    }

    function closePopUp() {
        setSelectedFlight(null)
        setPaymentMethod(null)
        setPaymentClicked(false)
        setGCASHClicked(false)
        setCreditCardClicked(false)
        const blur = document.getElementById("blur")
        blur.classList.remove("active")
    }

    function handleKeyDown(event) {
        if (event.key === "Escape") {
            closePopUp()
        }
    }

    function handlePaymentClick() {
        setPaymentClicked(true)
    }

    function handleGCASHClick() {
        setGCASHClicked(true)
        setPaymentMethod('GCASH');
        const blur = document.getElementById("blur")
        blur.classList.toggle("active")
    }

    function handleCreditCardClick() {
        setCreditCardClicked(true)
        setPaymentMethod('Credit Card');
        const blur = document.getElementById("blur")
        blur.classList.toggle("active")
    }

    function handleGCASHPayment() {
        alert(`Payment successful using ${paymentMethod}: ${gcashNumber}`);
    }

    function handleCreditCardPayment() {
        alert(`Payment successful using ${paymentMethod}: ${nameOnCard}, ${cardNumber}, ${expirationDate}`);
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
    }, [selectedFlight, paymentClicked, gcashClicked, creditCardClicked])

    window.addEventListener("keydown", handleKeyDown)

    const flights = [
        {
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
            price: "$150",
            seatAvailability: "10 seats left",
            class: "Business",
        },
    ]

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
                <div className="popupConfirmation" id="popupConfirmation">
                    <h2>BOOK FLIGHT CONFIRMATION</h2>
                    <div className="flight-details">
                        <p>
                            <span>Flight Number:</span> {selectedFlight.flightNumber}
                        </p>
                        <p>
                            <span>Departure:</span> {selectedFlight.departureAirport} -{" "}
                            {selectedFlight.departureTime}
                        </p>
                        <p>
                            <span>Arrival:</span> {selectedFlight.arrivalAirport} -{" "}
                            {selectedFlight.arrivalTime}
                        </p>
                        <p>
                            <span>Price:</span> {selectedFlight.price}
                        </p>
                        <p>
                            <span>Seat Availability:</span> {selectedFlight.seatAvailability}
                        </p>
                    </div>
                    <div className="buttons">
                        <button className="cancel-btn" onClick={() => { closePopUp() }}>Cancel</button>
                        <button className="proceed-btn" onClick={handlePaymentClick}>Proceed to Payment</button>
                    </div>
                </div>
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
        </>
    )
}
export default BookFlight