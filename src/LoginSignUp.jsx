import React, { useState } from 'react';
import Axios from 'axios';
import './LoginSignUp.css';
const LoginSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    aadharNumber: '',
    mobileNumber: '',
    otp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Values:', formData); // Log the form data

    try {
        // Send a POST request to the backend with the entire formData object
        await Axios.post('http://localhost:8007/api/form', formData);
        alert('User data saved successfully');
    } catch (error) {
        console.error('Error saving user data:', error);
        alert('Failed to save user data');
    }
};



  return (
    <div>
      <h1>CIVICSQUARE</h1>
      <h2>Empowering Communities, Building Solutions Together</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="aadharNumber">Aadhar Number:</label>
          <input type="text" id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="otp">OTP:</label>
          <input type="password" id="otp" name="otp" value={formData.otp} onChange={handleChange} />
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default LoginSignUp;
