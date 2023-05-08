import Navbar from "../components/Navbar";
import axios from "axios";

function Profile() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const logout = 1;
        axios.post('http://localhost/FinalProjectBackEnd/login.php', logout)
            .then((Response) => {
                if (Response) {
                    alert("You have been logged out!");
                }
            }).catch(error => alert(error.Response.data));
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