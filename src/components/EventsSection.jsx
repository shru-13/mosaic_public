import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, CardMedia, Button } from '@mui/material';
import i1 from '../assets/image1.jpg';
import i2 from '../assets/image2.jpg';
import i3 from '../assets/image3.jpg';
const events = [
  {
    title: 'Book Fair Extravaganza',
    date: 'August 5, 2024',
    description: 'Join us for a day filled with books, authors, and fun activities! Don\'t miss out!',
    image: i1
  },
  {
    title: 'Poetry Slam Night',
    date: 'August 12, 2024',
    description: 'Showcase your poetic prowess and enjoy a night of creativity and expression!',
    image: i2
  },
  {
    title: 'Literature Quiz Challenge',
    date: 'August 19, 2024',
    description: 'Test your knowledge and win exciting prizes! Are you up for the challenge?',
    image: i3
  }
];

const EventsSection = () => {
  return (
    <Box sx={{ padding: '20px 0' }}>
      <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '20px', color: '#E2E2B6' }}>Upcoming Events</Typography>
      <br/>
      <Grid marginLeft={0.5} marginRight={2} container spacing={4} justifyContent="center">
        {events.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography  gutterBottom variant="h5" component="div" sx={{ color: '#021526' }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: '#021526' }}>
                  {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: '#021526' }}>
                  {event.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" sx={{ backgroundColor: '#6EACDA', '&:hover': { backgroundColor: '#03346E' } }}>
                  Join
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventsSection;