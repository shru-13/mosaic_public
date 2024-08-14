// src/components/UserDashboard.jsx
import React from 'react';
// import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const productData = [
  { name: 'Sports', clubs: 40 },
  { name: 'Coding', clubs: 30 },
  { name: 'Literature', clubs: 20 },
  { name: 'Music', clubs: 50 },
  { name: 'Arts', clubs: 60 },
];

const UserDashboard = () => {
//   const { isAuthenticated, currentUser } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>User Dashboard</Typography>
      {/* <Typography variant="h6">Welcome, {currentUser.name}. You are logged in as a user.</Typography> */}
      
      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>Most Popular Clubs</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="clubs" fill="#03346E" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default UserDashboard;