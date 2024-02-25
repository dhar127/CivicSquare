import React from 'react';
import user from './assets/user.png';
import aadhar from './assets/aadhar.png';
import otp from './assets/otp.png';
import mobile from './assets/mobile.png';
import './LoginSignUp.css';
import { NavLink } from "react-router-dom";
const LoginSignUp = () => {
  
  const handleLogin = () => {
    // Here you would handle the login action, 
    // such as sending a request to authenticate the user
    // For simplicity, let's just display an alert for now
    alert(`User Login Successful!`);
   
  };
  const handleRecovery = () => {
    // Here you would implement the logic to send the recovery message
    // For simplicity, let's just display an alert for now
    alert('Reach Us 📩contactus@gmail.com');
  };

  return (
    <div className='full'>
       <h1 class="h1log">CIVICSQUARE</h1>
      <h2>Empowering Communities, Building Solutions Together</h2>
      <div className="container" >
        <div className="header">
          <div className="text">
            SignUp
          </div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user} alt="" align="center"/>
            <input type='text' placeholder='Name'/>
          </div>
          <div className="input">
            <img src={aadhar} alt=""/>
            <input type='text' placeholder='Aadhar Number'/>
          </div>
          <div className="input">
            <img src={mobile} alt=""/>
            <input type='text' placeholder='Mobile Number'/>
          </div>
          <div className="input">
            <img src={otp} alt=""/>
            <input type='password' placeholder='OTP'/>
          </div>
        </div>
        <div className="forgot-password" align="center">
          Lost Password? 
          <span onClick={handleRecovery}>Click here</span>
        </div>
        <div className="submit-container">
          <div className="submit" onClick={handleLogin}>
           
            <NavLink to="/dashboard">SignUp</NavLink>
         
        </div>
        <div className="submit" onClick={handleLogin}>
           <NavLink to="/dashboard">Login</NavLink>
           </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp;
