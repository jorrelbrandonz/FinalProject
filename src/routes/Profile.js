import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';



function Profile() { 
  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
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
      <h2>User Profile</h2>
      <h3>Registered Users:</h3>
      <pre>{JSON.stringify(auth, null, 2)}</pre>
        <button type="submit" onClick={handleSubmit}>
          Log out
        </button>
      </div>
    </>
  );
}


export default Profile;