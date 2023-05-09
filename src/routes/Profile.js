import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Profile() {

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
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
            <h1>Profile Page not yet done</h1>
            <button type="submit" onClick={handleSubmit} > Log out </button>
        </>
    )
}

export default Profile;