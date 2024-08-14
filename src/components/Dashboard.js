import React from 'react';
import artsImage from '../assets/art.jpg'; // Update paths as needed
import literatureImage from '../assets/lit.jpg';
import musicImage from '../assets/music.jpg';
import codingImage from '../assets/coding.jpg';
import sportsImage from '../assets/sport.jpg';
import '../components/Dashboard.css'; // Ensure you create this CSS file
import Timeline  from './Timeline';

const Dashboard = () => {
  const clubs = [
    { name: 'Arts', image: artsImage },
    { name: 'Literature', image: literatureImage },
    { name: 'Music', image: musicImage },
    { name: 'Coding', image: codingImage },
    { name: 'Sports', image: sportsImage },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="title">Welcome to the Club Dashboard</h1>
      <p className="description">
        Discover a world of passion and connection through our diverse range of clubs. Whether you're a sports enthusiast, a literary connoisseur, a coding wizard, an artistic soul, or a music lover, there's a club for you. Join like-minded individuals, participate in exciting events, and create unforgettable memories.
      </p>

    {/* <Timeline/> */}

      <div className="cards-container">
        {clubs.map((club, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <img src={club.image} alt={club.name} className="card-image" />
              <div className="card-overlay">
                <div className="card-title">{club.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
