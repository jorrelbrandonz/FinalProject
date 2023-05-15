import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import BookFlight from "./routes/BookFlight";
import Login from "./routes/Login";
import { Login2 } from "./routes/Login2";
import Profile from "./routes/Profile";
import About from "./routes/AboutUs";
import Navbar from "../src/components/Navbar";
import Navbar2 from "../src/components/Navbar2";
import React, { useState } from 'react';

function App() {

  const loggedIn = localStorage.getItem("emailData");

  if (loggedIn == null) {
    return (
      <div className='App'><Navbar2 /><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookflight" element={<BookFlight />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes></div>
    );
  }
  else {
    return (
      <div className='App'><Navbar /><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookflight" element={<BookFlight />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes></div>
    );
  }

}

export default App;
