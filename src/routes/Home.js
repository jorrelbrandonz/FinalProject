import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import heroimghome from '../assets/hero2.jpg';
import Destination from "../components/Destination";
import axios from "axios";

function Home() {

    return (
        <>
            <Hero cName="hero"
                heroImg={heroimghome}
                title="Your Journey Your Story" text="Flight Bookings Made Easier, Choose your Favorite Destination"
                buttonText="Book a Flight Now"
                cName2="hero-text"
                url="/bookflight"
                btnClass="show" />
            <Destination />
        </>
    );
}

export default Home;