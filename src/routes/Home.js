import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import heroimghome from '../assets/hero2.jpg';
import Destination from "../components/Destination";
import axios from "axios";

function Home () {


     const handleSubmit = (e) =>{
        e.preventDefault();
        const logout = 1;
        axios.post('http://localhost/FinalProjectBackEnd/login.php', logout)
        .then((Response)=>{
            if(Response){
            alert("You have been logged out!");
            }
        }).catch(error=>alert(error.Response.data));
      }


    return (
        <>
        <Navbar/>
        <Hero cName="hero" 
        heroImg={heroimghome} 
        title="Your Journey Your Story" text="Choose your Favorite Destination." 
        buttonText="Book a Flight Now" 
        url="/bookflight" 
        btnClass="show"/>
         <button type="submit" onClick={handleSubmit} > Log out </button>
        <Destination />
        </>
    );
}

export default Home;