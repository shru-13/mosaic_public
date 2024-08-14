import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/system';
import { useInView } from 'react-intersection-observer';

const Section = styled(Box)(({ theme, inView }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: inView ? 1 : 0,
  transition: 'opacity 1s ease-in-out',
  padding: '20px 0',
}));

const GradientBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '10px',
  background: 'linear-gradient(to left, #03346E, #03346E)',
  borderRadius: '8px',
  maxWidth: '500px',
}));

const GetInTouchSection = () => {
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory([...history, formData]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Section ref={ref3} inView={inView3}>
      <GradientBox>
        <Typography variant="h4" sx={{ marginBottom: '10px', color: '#021526' }}>BLOG</Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            name="name"
            placeholder='Name'
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            onChange={handleChange}
          />
          <TextField
            name="email"
            placeholder='Email'
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            onChange={handleChange}
          />
          <TextField
            name="message"
            placeholder='Message'
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: '20px',
              backgroundColor: '#6EACDA',
              '&:hover': { backgroundColor: '#03346E' },
              color: 'white'
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </GradientBox>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submission Successful</DialogTitle>
        <DialogContent>
          <Typography>Name: {formData.name}</Typography>
          <Typography>Email: {formData.email}</Typography>
          <Typography>Message: {formData.message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
      {/* {history.length > 0 && (
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h6">Submission History</Typography>
          {history.map((entry, index) => (
            <Box key={index} sx={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '4px' }}>
              <Typography>Name: {entry.name}</Typography>
              <Typography>Email: {entry.email}</Typography>
              <Typography>Message: {entry.message}</Typography>
            </Box>
          ))}
        </Box>
      )} */}
    </Section>
  );
};

export default GetInTouchSection;
