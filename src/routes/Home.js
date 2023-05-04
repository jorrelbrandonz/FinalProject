import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import heroimghome from '../assets/hero2.jpg';
import Destination from "../components/Destination";

function Home () {

    return (
        <>
        <Navbar/>
        <Hero cName="hero" 
        heroImg={heroimghome} 
        title="Your Journey Your Story" text="Choose your Favorite Destination." 
        buttonText="Book a Flight Now" 
        url="/bookflight" 
        btnClass="show"/>
        <Destination />
        </>
    );
}

export default Home;