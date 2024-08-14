import React from 'react';
import { Box, Typography } from '@mui/material';
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

const DiscussSection = () => {
  const [ref2, inView2] = useInView({ triggerOnce: true });

  return (
    <Section ref={ref2} inView={inView2}>
      <Typography variant="h2" sx={{ marginBottom: '10px', textAlign: 'center', color: '#03346E' }}>Discuss with us!</Typography>
    </Section>
  );
};

export default DiscussSection;