import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import video from '../assets/certificate.mp4';

const drawerWidth = 240;

const Awards = () => {
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
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#405D72', p: 3 }}>
        <Toolbar />
        {/* Video Banner Section */}
        <Box
          sx={{
            height: 500,
            mb: 4,
          }}
        >
          <video
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
            src={video}
            autoPlay
            loop
            muted
          />
        </Box>
        {/* Grid Section */}
        <Grid container spacing={2}>
          {[
            { name: 'Coding Club', link: '/codingcert' },
            { name: 'Sports Club', link: '/sportcert' },
            { name: 'Music Club', link: '/musiccert' },
            { name: 'Art Club', link: '/artcert' },
          ].map((club, index) => (
            <Grid item xs={3} key={club.name}>
              <Box
                component={Link}
                to={club.link}
                sx={{
                  height: 150,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: [
                    "rgba(63, 173, 168, 0.5)",  // Light teal
                    "rgba(63, 173, 168, 0.7)",  // Slightly darker teal
                    "rgba(128, 128, 128, 0.5)", // Light gray
                    "rgba(128, 128, 128, 0.7)"  // Slightly darker gray
                  ][index],
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  borderRadius: 1,
                  textDecoration: 'none',
                }}
              >
                {club.name}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Awards;
