import React, { useState } from 'react';
import Hero from "../components/Hero"
import heroimghome from '../assets/about.jpeg';
import Destination from "../components/Destination";

function AboutUs() {
    return (
        <>
            <Hero cName="hero"
                heroImg={heroimghome}
                title="About Us" text="Learn More About The Company" />
        </>
    );
}
export default AboutUs;