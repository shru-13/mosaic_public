// // import React from 'react';
// // import { Box, Button, Typography, Grid, Container } from '@mui/material';
// // import StarIcon from '@mui/icons-material/Star';
// // import Slider from 'react-slick';
// // import '../components/SportClub.css';
// // import "slick-carousel/slick/slick.css"; 
// // import "slick-carousel/slick/slick-theme.css";

// // // Images for the gallery
// // import img1 from '../assets/sp1.jpg';
// // import img2 from '../assets/sp2.jpg';
// // import img3 from '../assets/sp3.jpg';
// // import img4 from '../assets/sp4.jpg';
// // import img5 from '../assets/sp5.jpg';
// // import img6 from '../assets/sp6.jpg';
// // import Header from './Header';

// // // Activities data
// // const activities = [
// //   { id: 1, title: 'Soccer', description: 'Join our soccer team for weekly matches and tournaments.', img: img1 },
// //   { id: 2, title: 'Basketball', description: 'Participate in our basketball training sessions and games.', img: img2 },
// //   { id: 3, title: 'Tennis', description: 'Improve your tennis skills with our professional coaches.', img: img3 },
// //   { id: 4, title: 'Swimming', description: 'Enjoy swimming classes and competitions.', img: img4 },
// //   { id: 5, title: 'Yoga', description: 'Relax and strengthen your body with our yoga sessions.', img: img5 },
// //   { id: 6, title: 'Cycling', description: 'Join our cycling club for weekend rides and events.', img: img6 },
// // ];

// // // Reviews data
// // const reviews = [
// //   { id: 1, text: 'This club turned my couch potato life into a fitness fiesta!', author: 'Mike "The Machine" Johnson' },
// //   { id: 2, text: 'I came for the sports, stayed for the snacks!', author: 'Samantha "Snack Queen" Lee' },
// //   { id: 3, text: 'Best decision ever! My abs are thanking me... sort of.', author: 'Tom "Absurdly Fit" Smith' },
// // ];

// // // Announcements data
// // const announcements = [
// //   { id: 1, title: 'Annual Sports Meet', date: 'August 20, 2024', description: 'Join us for the annual sports meet featuring various competitions and activities.' },
// //   { id: 2, title: 'Yoga Retreat', date: 'September 10, 2024', description: 'Relax and rejuvenate at our weekend yoga retreat.' },
// //   { id: 3, title: 'Cycling Marathon', date: 'October 5, 2024', description: 'Participate in our city-wide cycling marathon.' },
// // ];

// // const SportClub = () => {
// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2000,
// //     cssEase: "linear"
// //   };

// //   return (
// //     <div className="club-page">
// //       <Header/>
// //       <div className="hero-section">
// //         <div className="overlay">
// //           <div className="hero-text">
// //             <Typography variant="h2" component="h1" className="hero-title">
// //               Game On
// //             </Typography>
// //             <Typography variant="h5" component="p" className="hero-subtitle">
// //               Unleash your inner champion and conquer the field with us!
// //             </Typography><br/>
// //             <Button variant="contained" className="join-button">
// //               Get Started
// //             </Button>
// //             <br/><br/>
// //           </div>
// //         </div>
// //       </div>
// //       <Container className="reviews-section" maxWidth={false}>
// //         <Typography variant="h3" component="h2" className="reviews-title">
// //           Hear From Us
// //         </Typography><br/><br/>
// //         <Grid container spacing={3}>
// //           {reviews.map((review) => (
// //             <Grid item xs={12} md={4} key={review.id}>
// //               <Box className="review-card">
// //                 <Box className="stars">
// //                   {[...Array(5)].map((_, index) => (
// //                     <StarIcon key={index} />
// //                   ))}
// //                 </Box>
// //                 <Typography variant="body1" component="p" className="review-text">
// //                   {review.text}
// //                 </Typography>
// //                 <Typography variant="body2" component="p" className="review-author">
// //                   {review.author}
// //                 </Typography>
// //               </Box>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Container>
// //       <Container className="activities-section" maxWidth={false}>
// //         <Typography variant="h3" component="h2" className="activities-title">
// //           Activities
// //         </Typography><br/><br/>
// //         <Grid container spacing={3}>
// //           {activities.map((activity) => (
// //             <Grid item xs={12} sm={6} md={4} key={activity.id}>
// //               <Box className="activity-card">
// //                 <img src={activity.img} alt={activity.title} className="activity-image" />
// //                 <Box className="activity-overlay">
// //                   <Typography variant="h6" component="h3" className="activity-title">
// //                     {activity.title}
// //                   </Typography>
// //                   <Typography variant="body1" component="p" className="activity-description">
// //                     {activity.description}
// //                   </Typography>
// //                   <Button variant="contained" className="join-activity-button">
// //                     Join Activity
// //                   </Button>
// //                 </Box>
// //               </Box>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Container>
// //       <Container className="announcements-section" maxWidth={false}>
// //         <Typography variant="h3" component="h2" className="announcements-title">
// //           Upcoming Events
// //         </Typography>
// //         <br/>
// //         <Grid container spacing={3}>
// //           {announcements.map((announcement) => (
// //             <Grid item xs={12} sm={6} md={4} key={announcement.id}>
// //               <Box className="announcement-card">
// //                 <Typography variant="h5" component="h3" className="announcement-title">
// //                   {announcement.title}
// //                 </Typography>
// //                 <Typography variant="body2" component="p" className="announcement-date">
// //                   {announcement.date}
// //                 </Typography>
// //                 <Typography variant="body1" component="p" className="announcement-description">
// //                   {announcement.description}
// //                 </Typography>
// //               </Box>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default SportClub;



// import React, { useContext, useState } from 'react';
// import { Box, Button, Typography, Grid, Container } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
// import Slider from 'react-slick';
// import '../components/SportClub.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import axios from 'axios';
// import { UserContext } from '../components/UserContext'; // Add this import

// // Images for the gallery
// import img1 from '../assets/sp1.jpg';
// import img2 from '../assets/sp2.jpg';
// import img3 from '../assets/sp3.jpg';
// import img4 from '../assets/sp4.jpg';
// import img5 from '../assets/sp5.jpg';
// import img6 from '../assets/sp6.jpg';
// import Header from './Header';

// // Activities data
// const activities = [
//   { id: 1, title: 'Soccer', description: 'Join our soccer team for weekly matches and tournaments.', img: img1 },
//   { id: 2, title: 'Basketball', description: 'Participate in our basketball training sessions and games.', img: img2 },
//   { id: 3, title: 'Tennis', description: 'Improve your tennis skills with our professional coaches.', img: img3 },
//   { id: 4, title: 'Swimming', description: 'Enjoy swimming classes and competitions.', img: img4 },
//   { id: 5, title: 'Yoga', description: 'Relax and strengthen your body with our yoga sessions.', img: img5 },
//   { id: 6, title: 'Cycling', description: 'Join our cycling club for weekend rides and events.', img: img6 },
// ];

// // Reviews data
// const reviews = [
//   { id: 1, text: 'This club turned my couch potato life into a fitness fiesta!', author: 'Mike "The Machine" Johnson' },
//   { id: 2, text: 'I came for the sports, stayed for the snacks!', author: 'Samantha "Snack Queen" Lee' },
//   { id: 3, text: 'Best decision ever! My abs are thanking me... sort of.', author: 'Tom "Absurdly Fit" Smith' },
// ];

// // Announcements data
// const announcements = [
//   { id: 1, title: 'Annual Sports Meet', date: 'August 20, 2024', description: 'Join us for the annual sports meet featuring various competitions and activities.' },
//   { id: 2, title: 'Yoga Retreat', date: 'September 10, 2024', description: 'Relax and rejuvenate at our weekend yoga retreat.' },
//   { id: 3, title: 'Cycling Marathon', date: 'October 5, 2024', description: 'Participate in our city-wide cycling marathon.' },
// ];

// const SportClub = () => {
//   const { user } = useContext(UserContext); // Get user context
//   const [joined, setJoined] = useState(false);

//   const handleJoinNow = async () => {
//     if (!user) {
//       console.error('User details are not available');
//       return;
//     }

//     const userDetails = {
//       userId: user.id,
//       name: user.name,
//       email: user.email,
//       phoneNumber: user.phoneNumber,
//       degree: user.degree,
//     };

//     try {
//       await axios.post('http://localhost:8080/sports/join', userDetails);
//       setJoined(true);
//       alert('You have successfully joined the Sport Club!');
//     } catch (error) {
//       console.error('Error joining sport club', error);
//     }
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };

//   return (
//     <div className="club-page">
//       <Header/>
//       <div className="hero-section">
//         <div className="overlay">
//           <div className="hero-text">
//             <Typography variant="h2" component="h1" className="hero-title">
//               Game On
//             </Typography>
//             <Typography variant="h5" component="p" className="hero-subtitle">
//               Unleash your inner champion and conquer the field with us!
//             </Typography><br/>
//             <Button
//               variant="contained"
//               className="join-button"
//               onClick={handleJoinNow}
//               disabled={joined}
//             >
//               {joined ? 'Joined' : 'Get Started'}
//             </Button>
//             <br/><br/>
//           </div>
//         </div>
//       </div>
//       <Container className="reviews-section" maxWidth={false}>
//         <Typography variant="h3" component="h2" className="reviews-title">
//           Hear From Us
//         </Typography><br/><br/>
//         <Grid container spacing={3}>
//           {reviews.map((review) => (
//             <Grid item xs={12} md={4} key={review.id}>
//               <Box className="review-card">
//                 <Box className="stars">
//                   {[...Array(5)].map((_, index) => (
//                     <StarIcon key={index} />
//                   ))}
//                 </Box>
//                 <Typography variant="body1" component="p" className="review-text">
//                   {review.text}
//                 </Typography>
//                 <Typography variant="body2" component="p" className="review-author">
//                   {review.author}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <Container className="activities-section" maxWidth={false}>
//         <Typography variant="h3" component="h2" className="activities-title">
//           Activities
//         </Typography><br/><br/>
//         <Grid container spacing={3}>
//           {activities.map((activity) => (
//             <Grid item xs={12} sm={6} md={4} key={activity.id}>
//               <Box className="activity-card">
//                 <img src={activity.img} alt={activity.title} className="activity-image" />
//                 <Box className="activity-overlay">
//                   <Typography variant="h6" component="h3" className="activity-title">
//                     {activity.title}
//                   </Typography>
//                   <Typography variant="body1" component="p" className="activity-description">
//                     {activity.description}
//                   </Typography>
//                   <Button variant="contained" className="join-activity-button">
//                     Join Activity
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <Container className="announcements-section" maxWidth={false}>
//         <Typography variant="h3" component="h2" className="announcements-title">
//           Upcoming Events
//         </Typography>
//         <br/>
//         <Grid container spacing={3}>
//           {announcements.map((announcement) => (
//             <Grid item xs={12} sm={6} md={4} key={announcement.id}>
//               <Box className="announcement-card">
//                 <Typography variant="h5" component="h3" className="announcement-title">
//                   {announcement.title}
//                 </Typography>
//                 <Typography variant="body2" component="p" className="announcement-date">
//                   {announcement.date}
//                 </Typography>
//                 <Typography variant="body1" component="p" className="announcement-description">
//                   {announcement.description}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default SportClub;

import React, { useContext, useState, useEffect } from 'react';
import { Box, Button, Typography, Grid, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import '../components/SportClub.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { UserContext } from '../components/UserContext'; // Import UserContext

// Images for the gallery
import img1 from '../assets/sp1.jpg';
import img2 from '../assets/sp2.jpg';
import img3 from '../assets/sp3.jpg';
import img4 from '../assets/sp4.jpg';
import img5 from '../assets/sp5.jpg';
import img6 from '../assets/sp6.jpg';
import Header from './Header';
import { Link } from 'react-router-dom';

// Activities data
const activities = [
  { id: 1, title: 'Swimming', description: 'Join our swimming team for weekly matches and tournaments.', img: img1 },
  { id: 2, title: 'Cycling', description: 'Participate in our cycling training sessions and games.', img: img2 },
  { id: 3, title: 'Football', description: 'Improve your football skills with our professional coaches.', img: img3 },
  { id: 4, title: 'Rugby', description: 'Enjoy rugby classes and competitions.', img: img4 },
  { id: 5, title: 'Basketball', description: 'Relax and strengthen your body with our basketball sessions.', img: img5 },
  { id: 6, title: 'Badminton', description: 'Join our badminton club for weekend rides and events.', img: img6 },
];

// Reviews data
const reviews = [
  { id: 1, text: 'This club turned my couch potato life into a fitness fiesta!', author: 'Mike "The Machine" Johnson' },
  { id: 2, text: 'I came for the sports, stayed for the snacks!', author: 'Samantha "Snack Queen" Lee' },
  { id: 3, text: 'Best decision ever! My abs are thanking me... sort of.', author: 'Tom "Absurdly Fit" Smith' },
];

// Announcements data
const announcements = [
  { id: 1, title: 'Annual Sports Meet', date: 'August 20, 2024', description: 'Join us for the annual sports meet featuring various competitions and activities.' },
  { id: 2, title: 'Yoga Retreat', date: 'September 10, 2024', description: 'Relax and rejuvenate at our weekend yoga retreat.' },
  { id: 3, title: 'Cycling Marathon', date: 'October 5, 2024', description: 'Participate in our city-wide cycling marathon.' },
];

const SportClub = () => {
  const { user } = useContext(UserContext); // Get user context
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    // Check if the user has already joined the club
    const checkMembership = async () => {
      if (!user) return;
      try {
        const response = await axios.get(`http://localhost:8080/sports/check/${user.id}`);
        setJoined(response.data.joined); // Ensure this returns a boolean
      } catch (error) {
        console.error('Error checking membership status', error);
      }
    };
    checkMembership();
  }, [user]);

  const handleJoin = async () => {
    if (!user) {
      console.error('User details are not available');
      return;
    }

    const userDetails = {
      userId: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      degree: user.degree,
    };

    try {
      await axios.post('http://localhost:8080/sports/join', userDetails);
      setJoined(true);
      alert('You have successfully joined the Sport Club!');
    } catch (error) {
      console.error('Error joining sport club', error);
    }
  };

  const handleLeave = async () => {
    if (!user) {
      console.error('User details are not available');
      return;
    }

    try {
      await axios.delete(`http://localhost:8080/sports/leave`, { data: { userId: user.id } });
      setJoined(false);
      alert('You have successfully left the Sport Club!');
    } catch (error) {
      console.error('Error leaving sport club', error);
    }
  };

  return (
    <div className="club-page">
      <Header/>
      <div className="hero-section">
        <div className="overlay">
          <div className="hero-text">
            <Typography variant="h2" component="h1" className="hero-title">
              Game On
            </Typography>
            <Typography variant="h5" component="p" className="hero-subtitle">
              Unleash your inner champion and conquer the field with us!
            </Typography><br/>
            <Button
              variant="contained"
              className="join-button"
              onClick={joined ? handleLeave : handleJoin}
              disabled={!user}
            >
              {joined ? 'Leave Club' : 'Get Started'}
            </Button>
            <br/><br/>
          </div>
        </div>
      </div>
      <Container className="reviews-section" maxWidth={false}>
        <Typography variant="h3" component="h2" className="reviews-title">
          Hear From Us
        </Typography><br/><br/>
        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Grid item xs={12} md={4} key={review.id}>
              <Box className="review-card">
                <Box className="stars">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </Box>
                <Typography variant="body1" component="p" className="review-text">
                  {review.text}
                </Typography>
                <Typography variant="body2" component="p" className="review-author">
                  {review.author}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className="activities-section" maxWidth={false}>
        <Typography variant="h3" component="h2" className="activities-title">
          Activities
        </Typography><br/><br/>
        <Grid container spacing={3}>
          {activities.map((activity) => (
            <Grid item xs={12} sm={6} md={4} key={activity.id}>
              <Box className="activity-card">
                <img src={activity.img} alt={activity.title} className="activity-image" />
                <Box className="activity-overlay">
                  <Typography variant="h6" component="h3" className="activity-title">
                    {activity.title}
                  </Typography>
                  <Typography variant="body1" component="p" className="activity-description">
                    {activity.description}
                  </Typography>
                  <Link to = "/part">
                  <Button variant="contained" className="join-activity-button">
                    Join Activity
                  </Button></Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className="announcements-section" maxWidth={false}>
        <Typography variant="h3" component="h2" className="announcements-title">
          Upcoming Events
        </Typography>
        <br/>
        <Grid container spacing={3}>
          {announcements.map((announcement) => (
            <Grid item xs={12} sm={6} md={4} key={announcement.id}>
              <Box className="announcement-card">
                <Typography variant="h5" component="h3" className="announcement-title">
                  {announcement.title}
                </Typography>
                <Typography variant="body2" component="p" className="announcement-date">
                  {announcement.date}
                </Typography>
                <Typography variant="body1" component="p" className="announcement-description">
                  {announcement.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default SportClub;
