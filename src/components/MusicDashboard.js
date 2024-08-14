


import React, { useState, useContext } from 'react';
import { Box, Typography, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import { styled } from '@mui/system';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import UpEvents from './UpEvents';
import './MusicDashboard.css';
import Header from './Header';
import axios from 'axios';
import { UserContext } from '../components/UserContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(to bottom, #021526 10%, #03346E 90%)',
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  color: '#E2E2B6'
}));

const practiceHoursData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Practice Hours',
      data: [30, 45, 28, 50, 49, 60],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const eventParticipationData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Event Participation',
      data: [5, 10, 7, 8, 6, 11],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const MusicDashboard = () => {
  const [joined, setJoined] = useState(false);
  const { user } = useContext(UserContext);

  const handleJoinNow = async () => {
    if (!user) {
      console.error('User details are not available');
      return;
    }

    const userDetails = {
      userId: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      degree: user.degree
    };

    try {
      await axios.post('http://localhost:8080/music/join', userDetails);
      setJoined(true);
      alert('You have successfully joined the Music Club!');
    } catch (error) {
      console.error('Error joining music club', error);
    }
  };
  const handleLeaveClub = async () => {
    if (!user) {
      console.error('User details are not available');
      return;
    }
  
    try {
      await axios.delete('http://localhost:8080/music/leave', {
        data: { userId: user.id }
      });
      setJoined(false);
      alert('You have successfully left the Music Club!');
    } catch (error) {
      console.error('Error leaving music club', error);
    }
  };
  

  return (
    <Box sx={{ padding: '40px', background: 'linear-gradient(to bottom, #03346E 10%, #021526 90%)' }}>
      <Header/>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <br/><br/><br/><br/><br/><br/>
        <Typography variant="h1" sx={{ color: '#E2E2B6', marginBottom: '20px' }}>
          Welcome to Music Club
        </Typography><br/><br/>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#6EACDA', color: '#021526', '&:hover': { backgroundColor: '#5A94B0' } }}
          onClick={joined ? handleLeaveClub : handleJoinNow}
          disabled={joined && !user}
        >
          {joined ? 'Leave Club' : 'Join Now'}
        </Button>
        <br/><br/><br/><br/><br/><br/><br/>
      </Box>
      <Section>
        <Typography variant="h3" sx={{ textAlign: 'center', color: '#E2E2B6', marginBottom: '20px' }}>
          Music Club Overview
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ color: '#03346E', marginBottom: '10px' }}>
                  Practice Hours
                </Typography>
                <Line data={practiceHoursData} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ color: '#03346E', marginBottom: '10px' }}>
                  Event Participation
                </Typography>
                <Bar data={eventParticipationData} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>
      <UpEvents />
      <Section>
        <Typography variant="h3" sx={{ textAlign: 'center', color: '#E2E2B6', marginBottom: '20px' }}>
          Leaderboard
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Practice Hours</TableCell>
                <TableCell align="right">Events Attended</TableCell>
                <TableCell align="right">Instruments</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { name: 'Alice', hours: 35, events: 5, instruments: 'Guitar' },
                { name: 'Bob', hours: 42, events: 7, instruments: 'Piano' },
                { name: 'Charlie', hours: 28, events: 3, instruments: 'Violin' },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.hours}</TableCell>
                  <TableCell align="right">{row.events}</TableCell>
                  <TableCell align="right">{row.instruments}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </Box>
  );
};

export default MusicDashboard;
