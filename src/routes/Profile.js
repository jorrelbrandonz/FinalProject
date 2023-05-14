import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import Navbar from "../components/Navbar";
import axios from "axios";
import { useMatch, useNavigate } from 'react-router-dom';
import "./ProfileStyles.css";
import profbg from '../assets/profbg.jpg';

function Profile() {

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
        navigate("/");
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
                        <p><strong>Email:</strong>{localStorage.getItem("emailData")}</p>
                        <p><strong>Password:</strong>{localStorage.getItem("passwordData")}</p>
                        <p><strong>Age:</strong>Insert Age backend here</p>
                        <p><strong>Gender:</strong>Insert Gender backend here</p>
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