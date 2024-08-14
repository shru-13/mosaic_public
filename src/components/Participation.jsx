// src/components/Participation.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { UserContext } from './UserContext';
import pic from '../assets/group1.jpg';

const eventsByClub = {
    sports: ['Football Match', 'Basketball Tournament', 'Swimming Gala'],
    art: ['Painting Exhibition', 'Sculpture Workshop', 'Photography Contest'],
    literature: ['Poetry Reading', 'Book Discussion', 'Writing Workshop'],
    music: ['Concert', 'Choir Practice', 'Instrument Workshop'],
    coding: ['Hackathon', 'Coding Bootcamp', 'AI Seminar'],
};

const eventDates = {
    'Football Match': '2024-08-10',
    'Basketball Tournament': '2024-08-15',
    'Swimming Gala': '2024-08-20',
    'Painting Exhibition': '2024-09-05',
    'Sculpture Workshop': '2024-09-12',
    'Photography Contest': '2024-09-19',
    'Poetry Reading': '2024-10-03',
    'Book Discussion': '2024-10-10',
    'Writing Workshop': '2024-10-17',
    'Concert': '2024-11-05',
    'Choir Practice': '2024-11-12',
    'Instrument Workshop': '2024-11-19',
    'Hackathon': '2024-12-01',
    'Coding Bootcamp': '2024-12-08',
    'AI Seminar': '2024-12-15',
};

const Participation = () => {
    const [club, setClub] = useState('');
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState('');
    const [date, setDate] = useState('');
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate(); // Initialize the navigate function

    const handleClubChange = (e) => {
        const selectedClub = e.target.value;
        setClub(selectedClub);
        setEvents(eventsByClub[selectedClub]);
        setEvent('');
        setDate('');
    };

    const handleEventChange = (e) => {
        const selectedEvent = e.target.value;
        setEvent(selectedEvent);
        setDate(eventDates[selectedEvent]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userDetails = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post('http://localhost:8080/part/join', userDetails);
            setUser(response.data);
            alert('You have successfully joined the event! We look forward to your participation');
            navigate('/arts'); // Navigate to the /arts route
        } catch (error) {
            console.error('Error joining the club', error);
        }
    };

    return (
        <div style={styles.backgroundContainer}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Participate in Events</h2>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Full Name</label>
                        <input type="text" name="fullName" required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Username</label>
                        <input type="text" name="username" required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email</label>
                        <input type="email" name="email" required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Phone Number</label>
                        <input type="text" name="phoneNumber" required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Club Name</label>
                        <select name="clubName" value={club} onChange={handleClubChange} required style={styles.select}>
                            <option value="">Select a Club</option>
                            <option value="sports">Sports</option>
                            <option value="art">Art</option>
                            <option value="literature">Literature</option>
                            <option value="music">Music</option>
                            <option value="coding">Coding</option>
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Events</label>
                        <select name="eventName" value={event} onChange={handleEventChange} required style={styles.select}>
                            <option value="">Select an Event</option>
                            {events.map((event, index) => (
                                <option key={index} value={event}>
                                    {event}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Date</label>
                        <input type="text" name="eventDate" value={date} readOnly style={styles.input} />
                    </div>
                    <button type="submit" style={styles.submitButton}>Get Started</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    backgroundContainer: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '800px',
        animation: 'slideIn 1s ease-out',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    form: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
    },
    select: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
    },
    submitButton: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '15px 25px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        gridColumn: 'span 2',
        justifySelf: 'center',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
};

styles.input[':focus'] = styles.select[':focus'] = {
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
    borderColor: '#007bff',
};

styles.input[':hover'] = styles.select[':hover'] = {
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    borderColor: '#007bff',
};

styles.submitButton[':hover'] = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
};

export default Participation;
