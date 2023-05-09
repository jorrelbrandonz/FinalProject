import Navbar from "../components/Navbar";
import axios from "axios";
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import React from 'react';
>>>>>>> 7ab2603c4e6cc24773b253ba44fb15e6c07dc768

function Profile({ user }) {

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        fetch('http://localhost/FinalProjectBackEnd/logout.php')
          .then((response) => {
            if (response.ok) {
              navigate('/');
              alert("Successful Log out!");
            } else {
              throw new Error("Error calling logout.php");
            }
          })
          .catch(error => alert(error.message));
      }
=======
        const logout = 1;
        axios.post('http://localhost/FinalProjectBackEnd/login.php', logout)
            .then((Response) => {
                if (Response) {
                    alert("You have been logged out!");
                }
            }).catch(error => alert(error.Response.data));
    }


>>>>>>> 7ab2603c4e6cc24773b253ba44fb15e6c07dc768
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