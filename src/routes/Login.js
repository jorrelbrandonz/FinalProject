import Navbar from "../components/Navbar";
import {Login2} from "./Login2";
import {Register} from "./Register";
import React, {useState} from 'react';
import "./LoginStyles.css";
import planebg from '../assets/planebg.jpg';

function Login () {
    const [currentForm, setCurrentForm] = useState('Login2');
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
    return (<>
    <Navbar/>
    <img className="logbg" alt="img" src={planebg} />
      <div className="login2style">
      {
        currentForm === 'Login2' ? <Login2 onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      </div>
      </>
    )
}

export default Login;