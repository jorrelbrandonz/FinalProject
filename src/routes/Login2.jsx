import React, {useState, useContext, useReducer} from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthProvider";

export const Login2 = (props) => {
    //const [myBoolean, setBoolean] = useState(false);
   
    //let it post (check)
    //if post success meaning successful login store axios.get then store it as a cookie
    const getEmail= localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function refreshPage() {
      window.location.reload(false);
    }

    let fData = new FormData();
    fData.append('email', email);
    fData.append('pass', pass);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
        axios.post('http://localhost/FinalProjectBackEnd/login.php', fData)
        .then((response) => {
          localStorage.setItem("emailData", email);
          localStorage.setItem("passwordData", pass);
          alert("Successful Login!");
          navigate('/');
          refreshPage();
        })
        .catch(error => {
          alert("Incorrect Username or Password");
        });
      }

    return(
        <div className='auth-form container'>
        <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log-in</h2>
        <label htmlFor="email"><FaEnvelope />   E-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>

        <label htmlFor="password"><FaLock/>   Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password" name="password" required/>

        <button className="proc" type="submit">Log-in</button>
        <button className="link-btn" type = "button" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Sign-up here.</button>
        </form>
    </div>
    )


    
}


