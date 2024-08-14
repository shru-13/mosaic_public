import React, { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video from '../assets/codingvideo.mp4';
import galleryImage1 from '../assets/c1.jpg';
import galleryImage2 from '../assets/c2.jpg';
import galleryImage3 from '../assets/c3.jpg';
import galleryImage4 from '../assets/c4.jpg';
import galleryImage5 from '../assets/c5.jpg';
import galleryImage6 from '../assets/c6.jpg';
import courseVideo1 from '../assets/codvid1.mp4';
import courseVideo2 from '../assets/codvid2.mp4';
import courseVideo3 from '../assets/codvid3.mp4';
import courseThumbnail1 from '../assets/co1.jpg';
import courseThumbnail2 from '../assets/co2.jpg';
import courseThumbnail3 from '../assets/co3.jpg';
import '../components/CodingClub.css';
import Header from './Header';
import axios from 'axios';
import { UserContext } from '../components/UserContext';
import { Link } from 'react-router-dom';

const CodingClub = () => {
  const { user } = useContext(UserContext);
  const [joinedEvents, setJoinedEvents] = useState({});
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinEventClick = async (eventTitle) => {
    setJoinedEvents((prevState) => ({
      ...prevState,
      [eventTitle]: !prevState[eventTitle],
    }));

    if (user) {
      try {
        await axios.post('http://localhost:8080/events/join', {
          userId: user.id,
          eventTitle,
        });
        alert('Event joined successfully!');
      } catch (error) {
        console.error('Error joining event', error);
      }
    } else {
      console.error('User details are not available');
    }
  };

  const handleJoinClubClick = async () => {
    if (!user) {
      console.error('User details are not available');
      return;
    }

    setIsJoining(true);

    try {
      if (joinedEvents['Coding Club']) {
        await axios.delete('http://localhost:8080/coding-club/leave', { data: { userId: user.id } });
        setJoinedEvents((prevState) => ({
          ...prevState,
          'Coding Club': false,
        }));
        alert('You have successfully left the Coding Club!');
      } else {
        const userDetails = {
          userId: user.id,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          degree: user.degree,
        };
        await axios.post('http://localhost:8080/coding-club/join', userDetails);
        setJoinedEvents((prevState) => ({
          ...prevState,
          'Coding Club': true,
        }));
        alert('You have successfully joined the Coding Club!');
      }
    } catch (error) {
      console.error('Error updating club membership', error);
    } finally {
      setIsJoining(false);
    }
  };

  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
  ];

  const coursePreviews = [
    {
      thumbnail: courseThumbnail1,
      video: courseVideo1,
      title: 'JavaScript Essentials',
      description: 'Learn the fundamentals of JavaScript, the programming language of the web.',
    },
    {
      thumbnail: courseThumbnail2,
      video: courseVideo2,
      title: 'Advanced CSS Techniques',
      description: 'Master advanced CSS techniques for creating visually stunning web pages.',
    },
    {
      thumbnail: courseThumbnail3,
      video: courseVideo3,
      title: 'React for Beginners',
      description: 'Get started with React and build dynamic user interfaces.',
    },
  ];

  const upcomingEvents = [
    { date: 'August 5, 2024', title: 'Hackathon Kickoff' },
    { date: 'September 10, 2024', title: 'Web Development Workshop' },
    { date: 'October 15, 2024', title: 'AI & ML Seminar' },
    { date: 'November 20, 2024', title: 'Cybersecurity Bootcamp' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box className="coding-club-container">
      <Header />

      <Box className="video-section">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box className="video-overlay">
          <Typography variant="h3" className="overlay-title">
            Code Like A Pro
          </Typography>
          <Typography variant="subtitle1" className="overlay-subtitle">
            Unleash your inner coding ninja and join the revolution!
          </Typography>
          <Box className="overlay-buttons">
            <Link to = "/part">
            <Button variant="outlined" className="explore-button">
              Explore Now
            </Button></Link>
            <Button
              variant="outlined"
              onClick={handleJoinClubClick}
              className={`join-button ${joinedEvents['Coding Club'] ? 'joined' : ''}`}
              disabled={isJoining}
            >
              {isJoining ? 'Processing...' : joinedEvents['Coding Club'] ? 'Leave the Club' : 'Join the Club'}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className="gallery-section">
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Box>

      <Box className="courses-section">
        <Typography variant="h3" className="courses-title">
          Useful Courses and Competitions
        </Typography>
        <Box className="course-grid">
          {coursePreviews.map((course, index) => (
            <Box key={index} className="course-card">
              <img src={course.thumbnail} alt={`Course thumbnail ${index + 1}`} className="course-thumbnail" />
              <Box className="course-info">
                <Typography variant="h5" className="course-title">
                  {course.title}
                </Typography>
                <Typography variant="body2" className="course-description">
                  {course.description}
                </Typography>
              </Box>
              <Box className="course-preview">
                <video loop muted>
                  <source src={course.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="events-section">
        <Typography variant="h3" className="events-title">
          Upcoming Events
        </Typography>
        <br/>
        <Box className="events-grid">
          {upcomingEvents.map((event, index) => (
            <Box key={index} className="event-card">
              <FontAwesomeIcon icon={faLightbulb} className="event-icon" />
              <Typography variant="h6" className="event-date">
                {event.date}
              </Typography>
              <Typography variant="body1" className="event-title">
                {event.title}
              </Typography>
              <Button
                variant="outlined"
                className={`join-button ${joinedEvents[event.title] ? 'joined' : ''}`}
                onClick={() => handleJoinEventClick(event.title)}
              >
                {joinedEvents[event.title] ? 'Leave Event' : 'Join Event'}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="footer">
        <Typography variant="body2" className="footer-text">
          &copy; 2024 Coding Club. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default CodingClub;
