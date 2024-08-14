import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, Typography, AppBar, Toolbar, Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const CLUB_COLORS = {
  'Sports': '#FFBB28',
  'Literature': '#FF8042',
  'Coding': '#00C49F',
  'Arts': '#0088FE',
};

const GENDER_COLORS = ['#FFBB28', '#FF8042']; // Colors for the pie chart

const ParticipationCharts = () => {
  const [clubData, setClubData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [genderData, setGenderData] = useState([]);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/part/join");
        const clubCounts = response.data.reduce((acc, curr) => {
          acc[curr.clubName] = (acc[curr.clubName] || 0) + 1;
          return acc;
        }, {});
        const formattedClubData = Object.entries(clubCounts).map(([clubName, count]) => ({ clubName, count }));
        setClubData(formattedClubData);
      } catch (error) {
        console.error("Error fetching club data:", error);
      }
    };

    const fetchEventData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/part/join");
        const eventCounts = response.data.reduce((acc, curr) => {
          acc[curr.eventName] = (acc[curr.eventName] || 0) + 1;
          return acc;
        }, {});
        const formattedEventData = Object.entries(eventCounts).map(([eventName, count]) => ({
          eventName,
          count,
          fill: CLUB_COLORS[eventName] || '#0088FE', // Default color
        }));
        setEventData(formattedEventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    const fetchGenderData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/allUsers");
        const genderCounts = response.data.reduce((acc, curr) => {
          acc[curr.gender] = (acc[curr.gender] || 0) + 1;
          return acc;
        }, {});
        const formattedGenderData = Object.entries(genderCounts).map(([gender, value]) => ({ name: gender, value }));
        setGenderData(formattedGenderData);
      } catch (error) {
        console.error("Error fetching gender data:", error);
      }
    };

    fetchClubData();
    fetchEventData();
    fetchGenderData();
  }, []);

  // Array of colors for the Club-wise Participation Chart bars
  const BAR_COLORS = ['#ca5f48', '#FF8042', '#00C49F', '#0088FE'];

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
          {/* Club-wise Participation Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, backgroundColor: '#03346E', color: '#E2E2B6' }}>
              <Typography variant="h6" gutterBottom>
                Club-wise Participation
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={clubData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#6EACDA" />
                  <XAxis dataKey="clubName" stroke="#E2E2B6" />
                  <YAxis stroke="#E2E2B6" />
                  <Tooltip contentStyle={{ backgroundColor: '#021526', color: '#E2E2B6' }} />
                  <Bar
                    dataKey="count"
                    fill={({ index }) => BAR_COLORS[index % BAR_COLORS.length]} // Color based on index
                  />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Clubs Participation Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, backgroundColor: '#03346E', color: '#E2E2B6' }}>
              <Typography variant="h6" gutterBottom>
                Clubs
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={eventData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#6EACDA" />
                  <XAxis dataKey="eventName" stroke="#E2E2B6" />
                  <YAxis stroke="#E2E2B6" />
                  <Tooltip contentStyle={{ backgroundColor: '#021526', color: '#E2E2B6' }} />
                  <Bar dataKey="count" fill={({ payload }) => payload.fill} />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Male-to-Female Ratio Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, backgroundColor: '#03346E', color: '#E2E2B6' }}>
              <Typography variant="h6" gutterBottom>
                Male-to-Female Ratio
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name} (${entry.value})`}
                    outerRadius={100}
                    fill="#00C49F"
                    dataKey="value"
                    labelStyle={{ fill: '#E2E2B6', fontSize: '14px' }}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#021526', color: '#E2E2B6' }} />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ParticipationCharts;
