import React, { useState } from 'react'
import user from './assets/user.png';
import aadhar from './assets/aadhar.png';
import otp from './assets/otp.png';
import mobile from './assets/mobile.png';
import './LoginSignUp.css';
const LoginSignUp = () => {
  const[action,setAction]=useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">
        {action}
        </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:
      <div className="input">
        <img src={user} alt="" align="center"/>
        <input type='text' placeholder='Name'/>
      </div>
      }
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
      {action==="SignUp"?<div></div>:<div className="forgot-password" align="center">Lost Password? <span>Click here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("SignUp")}>
          SignUp
        </div>
        <div className={action==="SignUp"?"submit gray":"submit"} onClick={()=>setAction("Login")}>
          Login
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp