import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Box, Toolbar, Typography, IconButton, Button, Container, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import logo from '../logo.png'; 
import Sidebar from './Sidebar'; // Make sure the path is correct

const FrostyAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderRadius: '15px',
  marginTop: '10px',
  padding: '0 20px',
}));

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('User logged out');
    setUser(null); // Clear user data on logout
  };

  useEffect(() => {
    // Fetch user data from the backend
    axios.get('/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <>
      <Container sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100 }}>
        <FrostyAppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleSidebar}> */}
              {/* <MenuIcon /> */}
            {/* </IconButton> */}
            <Box
              component="img"
              src={logo} // Replace with the path to your logo
              alt="Logo"
              sx={{ width: 100, height: 40, marginRight: 2 }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* Clubify */}
            </Typography>
            {user ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                  {user.name}
                </Typography>
                <Avatar>{user.name.charAt(0)}</Avatar>
                <IconButton color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
                  <LogoutIcon />
                </IconButton>
              </Box>
            ) : (
              <Typography variant="body1">
                
              </Typography>
            )}
          </Toolbar>
        </FrostyAppBar>
      </Container>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;