

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Drawer, Box, List, ListItem, ListItemButton, ListItemText, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const drawerWidth = 240;

const AdminCoding = () => {
  const [eventCounts, setEventCounts] = useState({
    'Hackathon': 0,
    'Coding Bootcamp': 0,
    'AI Seminar': 0
  });

  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchEventCounts = async () => {
      const counts = {};
      for (let event in eventCounts) {
        try {
          const response = await axios.get(`http://localhost:8080/part/countByEvent?eventName=${event}`);
          counts[event] = response.data;
        } catch (error) {
          console.error(`Error fetching count for ${event}`, error);
        }
      }
      setEventCounts(counts);
    };

    const fetchParticipants = async () => {
      try {
        const response = await axios.get('http://localhost:8080/part/codingadmin');
        setParticipants(response.data);
      } catch (error) {
        console.error('Error fetching participants', error);
      }
    };

    fetchEventCounts();
    fetchParticipants();
  }, []);

  const deleteParticipant = async (fullName, eventName) => {
    try {
      await axios.delete('http://localhost:8080/part/delete', { params: { fullName, eventName } });
      setParticipants(participants.filter(participant => !(participant.fullName === fullName && participant.eventName === eventName)));
    } catch (error) {
      console.error('Error deleting participant', error);
    }
  };

  const pieData = {
    labels: Object.keys(eventCounts),
    datasets: [
      {
        label: 'Participants by Event',
        data: Object.values(eventCounts),
        backgroundColor: [
          "rgba(63, 173, 168, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)"
        ],
        borderColor: [
          "rgba(63, 173, 168, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 159, 64, 0.7)"
        ],
        borderWidth: 1,
      },
    ],
  };

  const getRowColor = (eventName) => {
    switch (eventName) {
      case 'Hackathon':
        return "rgba(63, 173, 168, 0.5)";
      case 'Coding Bootcamp':
        return "rgba(255, 99, 132, 0.5)";
      case 'AI Seminar':
        return "rgba(255, 159, 64, 0.5)";
      default:
        return "#ffffff";
    }
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: "#3F8D8D" }}>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#021526' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" color={'#6EACDA'} sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E2B6' }}>
            Welcome, Admin!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#021526',
            color: '#E2E2B6',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[
              { text: 'Dashboard', link: '/stat' },
              { text: 'Users', link: '/data' },
              { text: 'Posts', link: '/posts' },
              { text: 'Certificates', link: '/certificate' },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemText primary={item.text} sx={{ color: '#E2E2B6' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Grid container spacing={3}>
          {Object.keys(eventCounts).map((eventName) => (
            <Grid item xs={12} sm={4} key={eventName}>
              <Paper sx={{ padding: 2, backgroundColor: "rgba(128, 128, 128, 0.5)", borderRadius: 2, textAlign: 'center', color: '#FFFFFF' }}>
                <Typography variant="h6">{eventName}</Typography>
                <Typography variant="h4">{eventCounts[eventName]}</Typography>
                <Typography variant="subtitle1">Participants</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, backgroundColor: "rgba(128, 128, 128, 0.5)", borderRadius: 2, height: '500px' }}>
              <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2, textAlign: 'center' }}>Participants Pie Chart</Typography>
              <Box sx={{ height: '90%', width: '100%' }}>
                <Pie 
                  data={pieData} 
                  options={{ 
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        labels: {
                          color: '#E2E2B6',
                        }
                      },
                      title: {
                        display: true,
                        text: 'Participants by Event',
                        color: '#E2E2B6',
                      },
                    },
                  }} 
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, backgroundColor: "rgba(128, 128, 128, 0.5)", borderRadius: 2, height: '500px' }}>
              <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2, textAlign: 'center' }}>Participants List</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Event</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {participants.map((participant) => (
                      <TableRow key={participant.id} sx={{ backgroundColor: getRowColor(participant.eventName) }}>
                        <TableCell>{participant.fullName}</TableCell>
                        <TableCell>{participant.email}</TableCell>
                        <TableCell>{participant.eventName}</TableCell>
                        <TableCell>
                          <Button variant="contained" color="secondary" onClick={() => deleteParticipant(participant.fullName, participant.eventName)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminCoding;
