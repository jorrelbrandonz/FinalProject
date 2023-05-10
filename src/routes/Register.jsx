import React, {useState} from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaCalendar } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export const Register = (props) => {

    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const [inputCode, setInputCode] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    //VERIFICATION ACCESS CODE
    const [accessCode, setAccessCode] = useState("123");

    /*var userAcc = {"name":{name}, "pass":{pass}, "email": email, "age":{age}};
    var json = JSON.stringify(userAcc);*/
    let fData = new FormData(); 
    fData.append('name', name);
    fData.append('pass', pass);
    fData.append('email', email);
    fData.append('age', age);
    fData.append('gender', gender);

    const handleVerify = (event) => {
        event.preventDefault();
        setShowPopup(true);
      };

      const handleAuthentication = (event) => {
        event.preventDefault();

        axios.get('http://localhost/FinalProjectBackEnd/Registration.php')
        .then(Response=>{
            accessCode = Response.data;
            console.log(accessCode);})
        .catch(error=>alert(error));


        if (inputCode === accessCode){
            alert("nigga");
        }
        else{
            alert("Wrong code!");
        }
      };

   function handleSubmit(event) {
       event.preventDefault();
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

    
    return(
    <div className='auth-form container'>
    
    <form className="register-form" onSubmit={handleVerify}>
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

        <button className="proc" type="submit">Sign-up</button>
        <button className="link-btn" type = "button" onClick={() => props.onFormSwitch('Login2')}>Already have an account? Log-in here.</button>
    </form>
    
    {showPopup && (
        <form className="popup">
        <h2>We've sent a code to your email address.</h2>
        <p>Please enter the code for verification</p>
          <input value={inputCode} onChange={(e) => setInputCode(e.target.value)} type='number' id="inputCode" name="inputCode" required/>
          <button onClick={handleAuthentication}>Enter</button>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </form>
      )}
    </div>
    )

}