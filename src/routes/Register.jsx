import React, {useState} from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaCalendar } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export const Register = () => {

    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    /*var userAcc = {"name":{name}, "pass":{pass}, "email": email, "age":{age}};
    var json = JSON.stringify(userAcc);*/
    let fData = new FormData(); 
    fData.append('name', name);
    fData.append('pass', pass);
    fData.append('email', email);
    fData.append('age', age);


   const handleSubmit =(e)=>{
        e.preventDefault();
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

    }

    
    return(
    <div className='auth-form container'>
    <form className="register-form" onSubmit={handleSubmit}>
    <h2>Sign-up</h2>
        <label htmlFor="name"><VscAccount/>   Full name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name='name' id='name' placeholder="Enter your fullname" required/>

        <label htmlFor="email"><FaEnvelope/>   E-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>

        <label htmlFor="password"><FaLock/>   Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password" name="password" required/>

        <label htmlFor="age"><FaCalendar/>   Age</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} type='number' id="age" name="age" required/>

        <button className="proc" type="submit">Sign-up</button>
        <button className="link-btn" type="button" >Already have an account? Log-in here.</button>
    </form>
    </div>
    )
}