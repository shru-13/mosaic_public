import React from 'react';
import './Whysection.css';

const WhySection = () => {
  const cards = [
    {
      title: 'Integrated Event Streaming',
      description: 'Clubs can stream their events live and store recordings for later viewing, expanding the reach of their activities and allowing more students to participate.',
    },
    {
      title: 'Virtual Club Fairs',
      description: 'Host engaging virtual club fairs with interactive booths, live Q&A sessions, and multimedia content, making it easy for students to explore and join clubs.',
    },
    {
      title: 'Dynamic Engagement Dashboard',
      description: 'Club leaders can track member engagement and activity with our real-time analytics, helping them make data-driven decisions to improve their clubs.',
    },
    {
      title: 'Collaborative Project Management',
      description: 'Manage club projects and events efficiently with task assignment, shared calendars, and collaborative document editing tools.',
    },
    {
      title: 'Customizable Club Pages',
      description: 'Each club can create and customize their own pages with rich media support, event listings, and member highlights, providing a personalized space to promote their activities.',
    },
    {
      title: 'Cross-Club Collaboration',
      description: 'Facilitate collaboration between clubs for joint events and projects with our collaboration hub, maximizing resource utilization and promoting inter-club cooperation.',
    },
    {
      title: 'Real-Time Polls and Surveys',
      description: 'Gather member opinions and feedback through real-time polls and surveys, helping clubs make informed decisions based on data.',
    },
    {
      title: 'Virtual Hangout Spaces',
      description: 'Create virtual spaces for members to socialize and network, fostering a sense of community and connection outside of formal events.',
    },
  ];

  return (
      <div className="why-section">
        <br/><br/>
      <h2 className="why-section-title">Why Choose Our Platform?</h2><br/><br/>
      <div className="why-cards-container">
        {cards.map((card, index) => (
          <div key={index} className="why-card">
            <h3 className="why-card-title">{card.title}</h3>
            <p className="why-card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySection;
