// src/components/Main.js
import React from 'react';
import './Main.css'; // Import the CSS for Main
import backgroundImage from '../background.jpg'; // Import the background image
import ChatbotButton from './ChatbotButton'; // Import the ChatbotButton component

function Main() {
  return (
    <main className="main" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="welcome-text">
        <h1>Welcome to RailRez</h1>
        <p>Comfort and Security at Your Fingertips.</p>
      </div>
      <div className="form-container">
        <div className="search-box">
          <form>
            <div>
              <label htmlFor="from-location">From:</label>
              <input type="text" id="from-location" name="from-location" required />
            </div>
            <div>
              <label htmlFor="to-location">To:</label>
              <input type="text" id="to-location" name="to-location" required />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required />
            </div>
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <ChatbotButton /> {/* Add the ChatbotButton component here */}
    </main>
  );
}

export default Main;

