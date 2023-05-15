import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import Navbar from "../components/Navbar";
import axios from "axios";
import { useMatch, useNavigate } from 'react-router-dom';
import "./ProfileStyles.css";
import profbg from '../assets/profbg.jpg';

function Profile() {

  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();
    /*const navigate = useNavigate();
    function noUser() {

        navigate('/login');
        alert("Please log in first!!");
    }

    if (!user) {
        return (noUser())
    }*/

    const getData = () => {
        const data = JSON.parse(localStorage.getItem("data"));
    }

    const getEmail = () =>{
        const  = getData();
        return data.email;
    }

    const getPassword = () =>{
        const data = getData();
        return data.password;
    }
    const getGender = () =>{
        const data = getData();
        return data.gender;
    }
    const getAge = () =>{
        const data = getData();
        return data.age;
    }


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
                        <p><strong>Email:</strong>{getEmail()}</p>
                        <p><strong>Password:</strong>{getPassword()}</p>
                        <p><strong>Age:</strong>{getAge()}</p>
                        <p><strong>Gender:</strong>{getGender()}</p>
                    </div>
                </div>
                <br />
                <button onClick={handleSubmit}>Log-out</button>
            </div>
        </>
    )
}


export default Profile;