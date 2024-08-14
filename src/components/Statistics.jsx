import React from 'react';
import { Box, Typography, Grid, Paper, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell,
} from 'recharts';

// Sample data
const userData = [
  { month: 'Jan', users: 200 },
  { month: 'Feb', users: 300 },
  { month: 'Mar', users: 250 },
  { month: 'Apr', users: 400 },
  { month: 'May', users: 350 },
  { month: 'Jun', users: 500 },
  { month: 'Jul', users: 600 },
];

const postData = [
  { month: 'Jan', posts: 50 },
  { month: 'Feb', posts: 80 },
  { month: 'Mar', posts: 65 },
  { month: 'Apr', posts: 120 },
  { month: 'May', posts: 90 },
  { month: 'Jun', posts: 150 },
  { month: 'Jul', posts: 200 },
];

const activityData = [
  { name: 'Posts', value: 400 },
  { name: 'Comments', value: 300 },
  { name: 'Likes', value: 200 },
  { name: 'Shares', value: 100 },
];

// Updated color palette
const COLORS = ['#FF6347', '#4682B4', '#32CD32', '#FFD700'];

const Statistics = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppBar position="fixed" sx={{ width: '100%', backgroundColor: '#021526' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color={'#6EACDA'} sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E2B6' }}>
            Welcome, Admin!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        variant="persistent"
        anchor="left"
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: '#03346E',
          },
        }}
      >
        <Box sx={{ overflow: 'auto', height: '100%' }}>
          <List>
            {[
              { text: 'Dashboard', link: '/part3' },
              { text: 'Users', link: '/data' },
              { text: 'Posts', link: '/posts' },
              { text: 'Certificates', link: '/certificate' },
            ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemIcon>
                    {/* Add your icons here */}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: '#E2E2B6' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px', overflow: 'auto' }}>
        <Typography variant="h4" gutterBottom color={'#6EACDA'}>
          ADMIN DASHBOARD
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, backgroundColor: '#03346E', color: '#E2E2B6' }}>
              <Typography variant="h6" gutterBottom>
                Monthly New Users
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={userData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#6EACDA" />
                  <XAxis dataKey="month" stroke="#E2E2B6" />
                  <YAxis stroke="#E2E2B6" />
                  <Tooltip contentStyle={{ backgroundColor: '#021526', color: '#E2E2B6' }} />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#FF6347" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, backgroundColor: '#03346E', color: '#E2E2B6' }}>
              <Typography variant="h6" gutterBottom>
                Monthly New Posts
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={postData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#6EACDA" />
                  <XAxis dataKey="month" stroke="#E2E2B6" />
                  <YAxis stroke="#E2E2B6" />
                  <Tooltip contentStyle={{ backgroundColor: '#021526', color: '#E2E2B6' }} />
                  <Legend />
                  <Bar dataKey="posts" fill="#32CD32" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, backgroundColor: '#03346E', color: '#E2E2B6' }}>
              <Typography variant="h6" gutterBottom>
                User Activity Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name} (${entry.value})`}
                    outerRadius={100}
                    fill="#6EACDA"
                    dataKey="value"
                    labelStyle={{ fill: '#E2E2B6', fontSize: '14px' }} // Adjust label style here
                  >
                    {activityData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
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

export default Statistics;
