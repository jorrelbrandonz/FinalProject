import React, { useState } from 'react';
import Hero from "../components/Hero"
import heroimghome from '../assets/about.jpeg';
import Destination from "../components/Destination";
import "./AboutUSStyles.css"

function AboutUs() {
    return (
        <>
            <Hero cName="hero2"
                heroImg={heroimghome}
                cName2="hero-text2"
                title="About Us" text="Learn More About The Company" />
            <div className="destination">
                <h1>JLABS Airlines</h1>
                <h3>Fast and Easy Flight Bookings</h3>

                <div className="first-des"><div className="des-text">
                    <p>Welcome to JLABS Airlines, where we believe in providing a seamless travel experience to our passengers. Our company was founded in 1995 with the aim to connect people, cultures, and countries through air travel. Since then, we have been continuously improving our services and expanding our network to offer our passengers the best possible travel experience.
                        At JLABS Airlines, we understand that traveling can be stressful and we strive to make it as comfortable and enjoyable as possible. Our well-trained crew members are always there to assist you and ensure that your journey is safe and comfortable.
                        We offer a wide range of services to make your travel experience hassle-free, such as online booking, airport transfers, in-flight meals, and entertainment. We also offer special assistance to passengers with disabilities or special needs to ensure their comfort and safety.
                        Our airline operates flights to various domestic and international destinations. Whether you're traveling for business or leisure, we have a flight for you. We also offer special discounts and promotions to make your travel more affordable.
                        At JLABS Airlines, we are committed to providing our passengers with a safe and reliable travel experience. We adhere to the highest safety standards and regulations to ensure the safety of our passengers and crew.</p>
                </div>
                    <div className="image"><img alt="img" src="https://www.wccaviation.com/storage/aerotech_course/20230314/resized/283T72N45R4qUPQ1z1CD031420230217.jpg" /><img alt="img" src="https://static.wixstatic.com/media/35dc7d_6d1fd52c3f024941b84c2b3002587c37~mv2.jpeg/v1/fill/w_640,h_622,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/35dc7d_6d1fd52c3f024941b84c2b3002587c37~mv2.jpeg" /></div>
                </div>

            </div>

        </>
    );
}
export default AboutUs;