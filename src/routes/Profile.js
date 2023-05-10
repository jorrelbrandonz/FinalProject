import Navbar from "../components/Navbar";
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProfileStyles.css";
import profbg from '../assets/profbg.jpg';

function Profile() {

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
        const logout = 1;
        axios.post('http://localhost/FinalProjectBackEnd/login.php', logout)
            .then((Response) => {
                if (Response) {
                    alert("You have been logged out!");
                }
            }).catch(error => alert(error.Response.data));
    }


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
                        <p><strong>Email:</strong>Insert email backend here</p>
                        <p><strong>Password:</strong>Insert password backend here</p>
                        <p><strong>Age:</strong>Insert Age backend here</p>
                        <p><strong>Gender:</strong>Insert Gender backend here</p>
                    </div>
                </div>
                <br />
                <button onClick={handleSubmit}>Log-out</button>
            </div>

        </>
    )
}

export default Profile;