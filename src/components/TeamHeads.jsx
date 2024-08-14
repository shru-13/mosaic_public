import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import p1 from '../assets/per1.jpg';
import p2 from '../assets/per2.jpg';
import p3 from '../assets/per3.jpeg';
const heads = [
  { name: 'Alice Johnson', image: p1 },
  { name: 'Bob Smith', image: p2 },
  { name: 'Carol Lee', image: p3 }
];

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px',
  perspective: '1000px'
});

const Card = styled(Box)({
  width: '180px',
  height: '170px',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 1s',
  '&:hover': {
    transform: 'rotateY(180deg)'
  }
});

const Front = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  overflow: 'hidden'
});

const Back = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'rotateY(180deg)',
  backgroundColor: '#E2E2B6',
  borderRadius: '50%',
  overflow: 'hidden'
});

const TeamHeads = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h2" sx={{ marginBottom: '20px', color: '#021526' }}>Team Heads</Typography><br/><br/>
      <Container>
        {heads.map((head, index) => (
          <Card key={index}>
            <Front>
              <img src={head.image} alt={head.name} style={{ width: '100%', height: '100%' }} />
            </Front>
            <Back>
              <Typography variant="h6" sx={{ color: '#021526' }}>{head.name}</Typography>
            </Back>
          </Card>
        ))}
      </Container><br/><br/>
    </Box>
  );
};

export default TeamHeads;