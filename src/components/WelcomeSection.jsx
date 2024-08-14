// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { styled } from '@mui/system';
// import { useInView } from 'react-intersection-observer';

// const fakeEvents = [
//   { date: new Date(2023, 7, 15), event: 'Poetry Reading' },
//   { date: new Date(2023, 7, 21), event: 'Book Discussion: "1984"' },
//   { date: new Date(2023, 7, 28), event: 'Writing Workshop' }
// ];

// const Section = styled(Box)(({ theme, inView }) => ({
//   minHeight: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   opacity: inView ? 1 : 0,
//   transition: 'opacity 1s ease-in-out',
//   padding: '20px 0',
// }));

// const WelcomeSection = () => {
//   const [date, setDate] = useState(new Date());
//   const [ref1, inView1] = useInView({ triggerOnce: true });

//   const tileContent = ({ date, view }) => {
//     const event = fakeEvents.find(e => e.date.toDateString() === date.toDateString());
//     return event ? (
//       <span style={{ backgroundColor: '#6EACDA', borderRadius: '50%', padding: '5px' }}></span>
//     ) : null;
//   };

//   return (
//     <Section ref={ref1} inView={inView1}>
//       <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <Typography variant="h2" sx={{ color: '#6EACDA', textAlign: 'center' }}>Welcome to the Literature Club</Typography>
//       </Box>
//       <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '100px' }}> {/* Added marginRight to the calendar container */}
//         <Calendar
//           value={date}
//           onChange={setDate}
//           tileContent={tileContent}
//         />
//       </Box>
//     </Section>
//   );
// };

// // export default WelcomeSection;
// import React, { useState } from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { styled } from '@mui/system';
// import { useInView } from 'react-intersection-observer';

// const fakeEvents = [
//   { date: new Date(2023, 7, 15), event: 'Poetry Reading' },
//   { date: new Date(2023, 7, 21), event: 'Book Discussion: "1984"' },
//   { date: new Date(2023, 7, 28), event: 'Writing Workshop' }
// ];

// const Section = styled(Box)(({ theme, inView }) => ({
//   minHeight: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   opacity: inView ? 1 : 0,
//   transition: 'opacity 1s ease-in-out',
//   padding: '20px 0',
//   position: 'relative'
// }));

// const CustomCalendar = styled(Calendar)(({ theme }) => ({
//   '& .react-calendar__tile': {
//     position: 'relative',
//     backgroundColor: '#E2E2B6',
//     '&:hover': {
//       backgroundColor: '#03346E',
//       color: '#E2E2B6',
//     }
//   },
//   '& .react-calendar__tile--active': {
//     backgroundColor: '#6EACDA',
//     color: 'white',
//   },
//   '& .react-calendar__tile--now': {
//     backgroundColor: '#03346E',
//     color: '#E2E2B6',
//   },
  
// }));

// const WelcomeSection = () => {
//   const [date, setDate] = useState(new Date());
//   const [ref1, inView1] = useInView({ triggerOnce: true });
//   const [buttonText, setButtonText] = useState('Join Club');

//   const handleButtonClick = () => {
//     setButtonText('Joined');
//   };

//   const tileContent = ({ date, view }) => {
//     const event = fakeEvents.find(e => e.date.toDateString() === date.toDateString());
//     return event ? (
//       <>
//         <span style={{
//           position: 'absolute',
//           bottom: '5px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           width: '6px',
//           height: '6px',
//           borderRadius: '50%',
//           backgroundColor: '#6EACDA',
//           transition: 'transform 0.2s'
//         }}></span>
//         <div style={{
//           position: 'absolute',
//           bottom: '30px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           backgroundColor: '#6EACDA',
//           color: '#E2E2B6',
//           padding: '5px 10px',
//           borderRadius: '5px',
//           zIndex: 1,
//           display: 'none'
//         }} className="event-popup">{event.event}</div>
//       </>
//     ) : null;
//   };

//   const tileClassName = ({ date, view }) => {
//     const event = fakeEvents.find(e => e.date.toDateString() === date.toDateString());
//     return event ? 'event-tile' : null;
//   };

//   return (
//     <Section ref={ref1} inView={inView1}>
//       <Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
//         <br/><br/><br/>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: '#6EACDA',
//             '&:hover': { backgroundColor: '#03346E' },
//             color: 'white'
//           }}
//           onClick={handleButtonClick}
//         >
//           {buttonText}
//         </Button>
//       </Box>
//       <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <Typography variant="h2" sx={{ color: '#6EACDA', textAlign: 'center' }}>Welcome to the Literature Club</Typography>
//       </Box>
//       <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '100px' }}>
//         <CustomCalendar
//           value={date}
//           onChange={setDate}
//           tileContent={tileContent}
//           tileClassName={tileClassName}
//         />
//       </Box>
//     </Section>
//   );
// };

// export default WelcomeSection;

import React, { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { styled } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { UserContext } from '../components/UserContext';

const fakeEvents = [
  { date: new Date(2023, 7, 15), event: 'Poetry Reading' },
  { date: new Date(2023, 7, 21), event: 'Book Discussion: "1984"' },
  { date: new Date(2023, 7, 28), event: 'Writing Workshop' }
];

const Section = styled(Box)(({ theme, inView }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: inView ? 1 : 0,
  transition: 'opacity 1s ease-in-out',
  padding: '20px 0',
  position: 'relative'
}));

const CustomCalendar = styled(Calendar)(({ theme }) => ({
  '& .react-calendar__tile': {
    position: 'relative',
    backgroundColor: '#E2E2B6',
    '&:hover': {
      backgroundColor: '#03346E',
      color: '#E2E2B6',
    }
  },
  '& .react-calendar__tile--active': {
    backgroundColor: '#6EACDA',
    color: 'white',
  },
  '& .react-calendar__tile--now': {
    backgroundColor: '#03346E',
    color: '#E2E2B6',
  },
}));

const WelcomeSection = () => {
  const { user } = useContext(UserContext);
  const [date, setDate] = useState(new Date());
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [buttonText, setButtonText] = useState('Join Club');

  const handleButtonClick = async () => {
    try {
      const response = await axios.post('http://localhost:8080/lit/join', {
        name: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
      if (response.status === 200) {
        setButtonText('Joined');
      }
    } catch (error) {
      console.error("There was an error joining the club!", error);
    }
  };

  const tileContent = ({ date, view }) => {
    const event = fakeEvents.find(e => e.date.toDateString() === date.toDateString());
    return event ? (
      <>
        <span style={{
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#6EACDA',
          transition: 'transform 0.2s'
        }}></span>
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#6EACDA',
          color: '#E2E2B6',
          padding: '5px 10px',
          borderRadius: '5px',
          zIndex: 1,
          display: 'none'
        }} className="event-popup">{event.event}</div>
      </>
    ) : null;
  };

  const tileClassName = ({ date, view }) => {
    const event = fakeEvents.find(e => e.date.toDateString() === date.toDateString());
    return event ? 'event-tile' : null;
  };

  return (
    <Section ref={ref1} inView={inView1}>
      <Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
        <br/><br/><br/>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#6EACDA',
            '&:hover': { backgroundColor: '#03346E' },
            color: 'white'
          }}
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ color: '#6EACDA', textAlign: 'center' }}>Welcome to the Literature Club</Typography>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '100px' }}>
        <CustomCalendar
          value={date}
          onChange={setDate}
          tileContent={tileContent}
          tileClassName={tileClassName}
        />
      </Box>
    </Section>
  );
};

export default WelcomeSection;
