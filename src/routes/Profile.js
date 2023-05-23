import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import Navbar from "../components/Navbar";
import axios from "axios";
import { useMatch, useNavigate } from 'react-router-dom';
import "./ProfileStyles.css";
import profbg from '../assets/profbg.jpg';


export const Profile = (props) => {

    let email = {
        "email": localStorage.getItem('emailData')
    }
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    function refreshPage() {
        window.location.reload(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("emailData", "");
        localStorage.setItem("passwordData", "");
        navigate("/");
        refreshPage();
    }

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch("http://localhost/FinalProjectBackEnd/profile.php", {
            "method": "POST",
            "header": {
                "Content-Type": "application/json; charset=utf-8"
            },
            "body": JSON.stringify(email)
        }).then (function(response){
            return response.json();
        }).then (function(data){
            console.log(data);
            setFlights(data);
        }).catch(error => {
            console.log(error);
        });
        fetch("http://localhost/FinalProjectBackEnd/getname.php", {
            "method": "POST",
            "header": {
                "Content-Type": "application/json; charset=utf-8"
            },
            "body": JSON.stringify(email)
        }).then (function(response){
            return response.json();
        }).then (function(data){
            console.log(data);
            setName(data['name']);
            setAge(data['age']);
            setGender(data['gender'])
        }).catch(error => {
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
                    <h1>{name}</h1>
                </div>
                <div className="ProfileBody">
                    <div className="ProfileInfo">
                        <p><strong>Email:</strong>{localStorage.getItem("emailData")}</p>
                        <p><strong>Age:</strong>{age}</p>
                        <p><strong>Gender:</strong>{gender}</p>
                    </div>
                </div>
                <h1 className="heading"> Booked Flights</h1>
                    <div className="table-container">
                        <table className="table">
                        <thead>
                            <tr>
                                <th>Flight Number</th>
                                <th>Departure Airport</th>
                                <th>Departure Time</th>
                                <th>Arrival Airport</th>
                                <th>Arrival Time</th>
                                <th>Airline</th>
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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                <br />
                <button onClick={handleSubmit}>Log-out</button>
            </div>
        </>
    )
}


export default Profile;