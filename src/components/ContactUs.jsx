import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';

const contactInfo = [
  {
    title: 'Phone',
    content: '(123) 456-7890',
  },
  {
    title: 'Email',
    content: 'info@clubmanagement.com',
  },
  {
    title: 'Address',
    content: 'India',
  },
  {
    title: 'Working Hours',
    content: 'Mon-Fri: 9am - 5pm',
  },
];

const ContactUs = () => {
  return (
    <Box sx={{ backgroundColor: '#03346E', padding: '40px' }}>
      <Typography variant="h2" align="center" color="#E2E2B6" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                backgroundColor: '#E2E2B6',
                color: '#021526',
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {info.title}
                </Typography>
                <Typography variant="body1">{info.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactUs;
