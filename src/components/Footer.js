import React from 'react';
import { Box, Grid, Typography, Card, CardContent, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#021526', padding: '40px', fontFamily: 'Montserrat, sans-serif' }}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#E2E2B6" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="#6EACDA" gutterBottom>
            Connect, engage, enjoy. Effortlessly manage your club, maximize your enjoyment. Bringing people together, one club at a time.
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#E2E2B6' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://pinterest.com" target="_blank" sx={{ color: '#E2E2B6' }}>
              <PinterestIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#E2E2B6' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#E2E2B6' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#03346E', color: '#E2E2B6', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <CardContent>
                  <LanguageIcon sx={{ fontSize: '40px' }} />
                  <Typography variant="body1" sx={{ marginTop: '10px' }}>
                    mosaic.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#03346E', color: '#E2E2B6', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <CardContent>
                  <EmailIcon sx={{ fontSize: '40px' }} />
                  <Typography variant="body1" sx={{ marginTop: '10px' }}>
                    mosaic1234@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
