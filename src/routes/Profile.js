import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import Navbar from "../components/Navbar";
import axios from "axios";
import { useMatch, useNavigate } from 'react-router-dom';
import "./ProfileStyles.css";
import profbg from '../assets/profbg.jpg';

export const Profile = (props) => {

    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    function refreshPage() {
        window.location.reload(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("emailData", "");
        localStorage.setItem("passwordData", "");
        document.cookie = "email2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate("/");
        refreshPage();
    }

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/FinalProjectBackEnd/profile.php/')
            .then(response => {
                console.log(response.data);
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
                    <h1>Name</h1>
                </div>
                <div className="ProfileBody">
                    <div className="ProfileInfo">
                        <p><strong>Email:</strong>{localStorage.getItem("emailData")}</p>
                        <br></br>
                        
                    </div>
                </div>
                <br />
                <button onClick={handleSubmit}>Log-out</button>
            </div>
        </>
    )
}


export default Profile;