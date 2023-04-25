import React, {useState} from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaCalendar } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const user = [
        {
            userName: {name},
            userPass: {pass},
            userEmail: {email},
            userAge: {age},
            userGender: {gender}
        }
    ];

   const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
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

        <label htmlFor="age"><FaOdnoklassniki/>   Gender</label>
        <fieldset className='signup'>
            <label><input id="male" type="radio" name="male-female-other" value={gender} onChange={(e) => setGender(e.target.value)} class='radioinp' checked required/> Male</label>
            <label><input id="female" type="radio" name="male-female-other" value={gender} onChange={(e) => setGender(e.target.value)} class='radioinp' checked required/> Female</label>
            <label><input id="other" type="radio" name="male-female-other" value={gender} onChange={(e) => setGender(e.target.value)} class='radioinp' checked required/> Other</label>
        </fieldset>

        <button className='proc' type="submit">Sign-up</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login2')}>Already have an account? Log-in here.</button>
    </form>
    </div>
    )
}