import React, { useState, useEffect } from "react";
import axios from "axios";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Part3Chart from '../components/Part3Chart';

const drawerWidth = 240;

const ClubCard = ({ title, membersCount, gradient }) => {
  return (
    <div style={{ ...styles.card, background: gradient }}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.membersCount}>{membersCount} students enrolled</p>
    </div>
  );
};

const AdminPart3 = () => {
  const [clubMembers, setClubMembers] = useState({
    sports: 0,
    arts: 0,
    music: 0,
    coding: 0,
  });

  useEffect(() => {
    const fetchClubMembers = async () => {
      try {
        const sportsResponse = await axios.get("http://localhost:8080/sports/count");
        const artsResponse = await axios.get("http://localhost:8080/arts/count");
        const musicResponse = await axios.get("http://localhost:8080/music/count");
        const codingResponse = await axios.get("http://localhost:8080/coding-club/count");

        setClubMembers({
          sports: sportsResponse.data,
          arts: artsResponse.data,
          music: musicResponse.data,
          coding: codingResponse.data,
        });
      } catch (error) {
        console.error("Error fetching club members:", error);
      }
    };

    fetchClubMembers();
  }, []);

  return (
    <div style={styles.container}>
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
      <div style={styles.content}>
        <div style={styles.gridContainer}>
          <br/><br/>
          <Link to="/sportadmin" style={styles.link}>
            <ClubCard
              title="Sports"
              membersCount={clubMembers.sports}
              gradient="linear-gradient(to right, #3fada8, #808080)"
            />
          </Link>
          <Link to="/artadmin" style={styles.link}>
            <ClubCard
              title="Arts"
              membersCount={clubMembers.arts}
              gradient="linear-gradient(to right, #3fada8, #808080)"
            />
          </Link>
          <Link to="/musicadmin" style={styles.link}>
            <ClubCard
              title="Music"
              membersCount={clubMembers.music}
              gradient="linear-gradient(to right, #3fada8, #808080)"
            />
          </Link>
          <Link to="/codingadmin" style={styles.link}>
            <ClubCard
              title="Coding"
              membersCount={clubMembers.coding}
              gradient="linear-gradient(to right, #3fada8, #808080)"
            />
          </Link>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div style={styles.chartContainer}>
          <Part3Chart />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    backgroundColor: 'rgba(63, 173, 168, 0.7)', // Updated background color
    minHeight: '100vh',
    padding: '20px', // Added padding to ensure content doesn't touch the edges
  },
  content: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: '300px', // Increased width for the grid
    marginRight: '20px', // Add space between grid and chart
  },
  chartContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '500px', // Increased height for the chart
  },
  card: {
    padding: "20px",
    borderRadius: "15px",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  membersCount: {
    fontSize: "18px",
  },
  link: {
    textDecoration: 'none', // Removes the underline from the link
  },
};

export default AdminPart3;
