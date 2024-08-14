import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="event event-up">
          <div className="event-content">
            <h3>2015</h3>
            <p>Club Organisation Committee Formed</p>
          </div>
        </div>
        <div className="event event-down">
          <div className="event-content">
            <h3>2016</h3>
            <p>Sports and Music Clubs Founded</p>
          </div>
        </div>
        <div className="event event-up">
          <div className="event-content">
            <h3>2017</h3>
            <p>Coding and Arts Club Founded</p>
          </div>
        </div>
        <div className="event event-down">
          <div className="event-content">
            <h3>2019</h3>
            <p>Literature Club Founded</p>
          </div>
        </div>
        <div className="event event-now">
          <div className="event-content">
            <h3>Present</h3>
            <p>Current State</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
