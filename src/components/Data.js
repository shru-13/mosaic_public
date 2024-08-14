import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, Card, AppBar, Toolbar, ListItem, ListItemButton, ListItemText, List, Drawer, Avatar, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Data.css';
import MaleAvatar from '../assets/male.jpg';
import FemaleAvatar from '../assets/female.png';

const drawerWidth = 240;

const Data = () => {
  const [clubCounts, setClubCounts] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchClubCounts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/clubCounts');
        setClubCounts(response.data);
      } catch (error) {
        console.error('Error fetching club counts:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allUsers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchClubCounts();
    fetchUsers();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
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
            backgroundColor: '#021526'
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
              { text: 'Posts', link: '/adminpost' },
              { text: 'Certificates', link: '/awards' },
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
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Avatar
                      alt={user.name}
                      src={user.gender === 'male' ? MaleAvatar : FemaleAvatar}
                      sx={{ width: 120, height: 120, marginBottom: 2 }}
                    />
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="body1">Club: {user.club}</Typography>
                  </div>
                  <div className="flip-card-back">
                    <CardContent>
                      <Typography variant="h6">{user.name}</Typography>
                      <Typography variant="body1">Email: {user.email}</Typography>
                      <Typography variant="body1">Phone: {user.phone}</Typography>
                      <Typography variant="body1">Gender: {user.gender}</Typography>
                      <Typography variant="body1">Institution: {user.institution}</Typography>
                      <Typography variant="body1">Degree: {user.degree}</Typography>
                      <Typography variant="body1">Address: {user.address}</Typography>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Data;

