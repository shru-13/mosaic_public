import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EventsSection = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #021526;  /* Adjust background color */
`;

const SectionTitle = styled.h2`
  color: #E2E2B6;  /* Adjust title color */
  margin-bottom: 40px;
  margin-top: 60px;
`;

const EventsContainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventCard = styled.div`
  background-color: #03346E;  /* Adjust card background color */
  border: 1px solid #6EACDA;  /* Adjust border color */
  border-radius: 10px;
  width: 300px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const EventName = styled.h3`
  margin: 0 0 10px;
  color: #E2E2B6;  /* Adjust name color */
`;

const EventDate = styled.p`
  margin: 5px 0;
  color: #6EACDA;  /* Adjust date color */
  font-weight: bold;
`;

const EventDescription = styled.p`
  color: #E2E2B6;  /* Adjust description color */
`;

const ParticipateButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #6EACDA;  /* Adjust button background color */
  color: #021526;  /* Adjust button text color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #E2E2B6;  /* Adjust button hover background color */
  }
`;

const events = [
  { name: 'Music Jam Session', date: '2024-08-01', description: 'Join us for an evening of live music and jam sessions! Bring your instruments and share the stage with fellow musicians.' },
  { name: 'Choir Practice', date: '2024-08-10', description: 'Weekly choir practice session. All members are welcome. Prepare for our upcoming performance and improve your vocal skills.' },
  { name: 'Concert Night', date: '2024-08-15', description: 'Experience a night of great music performances. Enjoy a variety of genres and support your fellow club members.' },
  { name: 'Music Theory Workshop', date: '2024-08-20', description: 'A comprehensive workshop on music theory. Learn about scales, chords, and the structure of different musical compositions.' },
  { name: 'Open Mic Night', date: '2024-08-25', description: 'Show off your talent at our open mic night. Sing, play an instrument, or perform your original compositions.' },
  { name: 'Music Production Seminar', date: '2024-08-30', description: 'Learn the basics of music production in this seminar. Get hands-on experience with professional production software.' },
];

const UpEvents = () => {
  return (
    <EventsSection>
      <SectionTitle>Upcoming Events</SectionTitle>
      <EventsContainer>
        {events.map((event, index) => (
          <EventCard key={index}>
            <EventName>{event.name}</EventName>
            <EventDate>{event.date}</EventDate>
            <EventDescription>{event.description}</EventDescription>
            <Link to = "/part">
            <ParticipateButton>Participate</ParticipateButton></Link>
          </EventCard>
        ))}
      </EventsContainer>
    </EventsSection>
  );
};

export default UpEvents;
