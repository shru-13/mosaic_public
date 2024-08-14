// src/pages/AdminDashboard.js
import React from 'react';
import { Container, Grid, Paper, Typography, Box, Button } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material/styles';
import ScrollToTop from '../components/ScrollToUp';
import Header from './Header';

const data = [
  { month: 'Jan', Sports: 4000, Arts: 2400, Coding: 2400, Literature: 2400, Music: 2400 },
  { month: 'Feb', Sports: 3000, Arts: 1398, Coding: 2210, Literature: 2000, Music: 2100 },
  // ... more data
];

const DashboardCard = ({ icon, label, value, color }) => (
  <Paper elevation={3} sx={{ 
    padding: 2, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    background: color,
    color: 'white',
    transition: 'transform 0.3s ease-in-out',
    borderRadius: 2,
    boxShadow: 3,
    '&:hover': {
      transform: 'scale(1.05)',
      background: 'linear-gradient(135deg, #6EACDA, #E2E2B6)',
    }
  }}>
    {icon}
    <Box>
      <Typography variant="h6">{label}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Box>
  </Paper>
);

const ClubCard = ({ name, icon, description, color }) => (
  <Paper elevation={3} sx={{ 
    padding: 2, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: color,
    color: 'white',
    transition: 'transform 0.3s ease-in-out',
    borderRadius: 2,
    boxShadow: 3,
    textAlign: 'center',
    height: '200px',
    '&:hover': {
      transform: 'rotateY(15deg)',
      background: 'linear-gradient(135deg, #6EACDA, #E2E2B6)',
    }
  }}>
    {icon}
    <Typography variant="h5" sx={{ mt: 1 }}>{name}</Typography>
    <Typography variant="body2">{description}</Typography>
  </Paper>
);

const AdminDashboard = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Header/>
      <br /><br /><br />
      <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#021526', color: 'white' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Box>
                  <Typography variant="h6" color="lightblue">Overall Events</Typography>
                  <Typography variant="body1">50 Events</Typography>
                  <Typography variant="h6" color="lightgreen">Total Members</Typography>
                  <Typography variant="body1">1,200</Typography>
                  <Typography variant="h6" color="lightcoral">Upcoming Events</Typography>
                  <Typography variant="body1">15</Typography>
                </Box>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  View Reports
                </Button>
              </Grid>
              <Grid item xs={12} md={9}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="Sports" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="Arts" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="Coding" stroke="#ff7300" strokeWidth={2} />
                    {/* <Line type="monotone" dataKey="Literature" stroke="#00c49f" strokeWidth={2} /> */}
                    <Line type="monotone" dataKey="Music" stroke="#d0ed57" strokeWidth={2} />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                  </LineChart>
                </ResponsiveContainer>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      <Grid container spacing={3}>
       
        
        {/* Club Cards */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {[
            { name: 'Arts', link: '/arts' },
            { name: 'Coding', link: '/coding' },
            { name: 'Music', link: '/music' },
            { name: 'Sports', link: '/sports' },
            // { name: 'Literature', link: '/lit' },
          ].map(({ name, link }) => (
            <Grid item xs={12} sm={6} md={4} key={name}>
              <Link to={link} style={{ textDecoration: 'none' }}>
                <ClubCard 
                  name={name} 
                  icon={<PeopleIcon fontSize="large" />} 
                  description={`Details about the ${name} club.`} 
                  color="#6EACDA"
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        
      </Grid>
      <br /><br /><br />
    </Container>
  );
};

export default AdminDashboard;