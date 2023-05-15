import React, {useState, useRef} from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaCalendar } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';


export const Register = (props) => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [inputCode, setInputCode] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const [randomNum, setRandom] = useState(Math.floor(1000 + Math.random() * 9000));

    let fData = new FormData(); 
    fData.append('name', name);
    fData.append('pass', pass);
    fData.append('email', email);
    fData.append('age', age);
    fData.append('gender', gender);

    const handleVerify = (event) => {
        event.preventDefault();
        setShowPopup(true);
        sendEmail(event);
      };

      const handleAuthentication = (event) => {
        event.preventDefault();
        if (inputCode == randomNum){
            handleSubmit();
        }
        else{
            alert("Wrong code!");
        }
      };

   function handleSubmit() {
        console.log(fData);
        axios.post('http://localhost/FinalProjectBackEnd/Registration.php', fData)
        .then((Response)=>{
            if(Response){
                console.log(Response);
                navigate('/');
                alert("Registration Successful!");
            }
        })
        .catch(error=>alert(error));

    };
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wwc6qf6', 'template_oewl9mg', form.current, 'cyXE5j-r-pA6DZ60s')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    
    return(
    <div className='auth-form container'>
    <form className="register-form" onSubmit={handleVerify} ref={form}>
    <h2>Sign-up</h2>
        <label htmlFor="name"><VscAccount/>   Full name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name='name' id='name' placeholder="Enter your fullname" required/>

        <label htmlFor="email"><FaEnvelope/>   E-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>

        <label htmlFor="password"><FaLock/>   Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password" name="password" required/>

        <label htmlFor="age"><FaCalendar/>   Age</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} type='number' id="age" name="age" required/>

        <label htmlFor="gender"><BsGenderAmbiguous/>  Gender</label>
        <input value={gender} onChange={(e) => setGender(e.target.value)} type='text' id="gender" name="gender" required placeholder="e.g. Male"/>

        <input value={randomNum} readOnly placeholder="Password" name="code" style={{display: 'none'}} />

        <button className="proc" type="submit" value="Send">Sign-up</button>
        <button className="link-btn" type = "button" onClick={() => props.onFormSwitch('Login2')}>Already have an account? Log-in here.</button>
    </form>
    {showPopup && (
        <form className="popup">
        <h2>We've sent a code to your email address.</h2>
        <p>Please enter the code for verification</p>
          <input value={inputCode} onChange={(e) => setInputCode(e.target.value)} type='text' id="inputCode" name="inputCode" required/>
          <button onClick={handleAuthentication}>Enter</button>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </form>
      )}
    </div>
    )

}