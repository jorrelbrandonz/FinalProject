import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import Navbar from "../components/Navbar";
import axios from "axios";
import { useMatch, useNavigate } from 'react-router-dom';
import "./ProfileStyles.css";
import profbg from '../assets/profbg.jpg';

function Profile() {

    let email = localStorage.getItem('emailData');

    let fData = new FormData();
    fData.append('email', email);

    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    /*const navigate = useNavigate();
    function noUser() {

        navigate('/login');
        alert("Please log in first!!");
    }

    if (!user) {
        return (noUser())
    }*/


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("emailData", "");
        localStorage.setItem("passwordData", "");
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate("/");
    }
    
    

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.post('http://localhost/FinalProjectBackEnd/profile.php/', fData)
            .then(response => {
                console.log(fData);
                console.log(response);
                setFlights(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="UserProfile">
                <div className="ProfilePicture">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
                </div>
                <div className="ProfileHeader">
                    <h1>Full Name</h1>
                </div>
                <div className="ProfileBody">
                    <div className="ProfileInfo">
                        <p><strong>Email:</strong>{localStorage.getItem("emailData")}</p>
                        <p><strong>Password:</strong>{localStorage.getItem("passwordData")}</p>
                        <p><strong>Age:</strong>Insert Age backend here</p>
                        <p><strong>Gender:</strong>Insert Gender backend here</p>
                        <br></br>
                        <h1 className="heading"> Booked flights! UwU </h1>
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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <pre>{JSON.stringify(auth, null, 2)}</pre>
                    </div>
                </div>
                <br />
                <button onClick={handleSubmit}>Log-out</button>
            </div>
        </>
    )
}


export default Profile;