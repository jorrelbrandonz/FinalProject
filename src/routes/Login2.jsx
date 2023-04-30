import React, {useState} from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";

export const Login2 = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
        <button className="link-btn" type = "button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign-up here.</button>
        </form>
    </div>
    )
}