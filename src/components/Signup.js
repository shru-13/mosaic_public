import React, { useState } from 'react';
import './Signup.css';
import myImage from '../assets/bg.jpg'; // Import the local image

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleGenerateOtp = () => {
    // Logic to generate OTP
    alert('OTP generated!');
  };

  const handleSignUp = () => {
    // Logic to handle sign up
    alert('Signed Up!');
  };

  return (
    <div className="container">
      <div className="left-half">
        <img src={myImage} alt="Decorative" />
      </div>
      <div className="right-half">
        <div className="form-container">
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="phone">E-mail ID:</label>
            <div className="phone-input-group">
              <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button onClick={handleGenerateOtp} className="otp-button">Verify mail</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button className="sign-up-button" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
