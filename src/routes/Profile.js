import Navbar from "../components/Navbar";
import axios from "axios";
import React from 'react';

function Profile({ user }) {

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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                <h1>User Profile Page</h1>
                <ul>
                    <h2>{user.userEmail}</h2>
                    <h3>{user.userPass}</h3>
                </ul>
                <button type="submit" onClick={handleSubmit} > Log out </button>
            </div>
        </>
    )
}

export default Profile;