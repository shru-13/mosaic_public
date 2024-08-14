import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Statistics = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '40px 0',
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px'
});

const StatisticItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const StatisticsSection = () => {
  return (
    <Statistics>
      <StatisticItem>
        <Typography variant="h2" sx={{ color: '#6EACDA' }}>150+</Typography>
        <Typography variant="h6" sx={{ color: '#021526' }}>Active Members</Typography>
      </StatisticItem>
      <StatisticItem>
        <Typography variant="h2" sx={{ color: '#6EACDA' }}>50+</Typography>
        <Typography variant="h6" sx={{ color: '#021526' }}>Exciting Events</Typography>
      </StatisticItem>
      <StatisticItem>
        <Typography variant="h2" sx={{ color: '#6EACDA' }}>1000+</Typography>
        <Typography variant="h6" sx={{ color: '#021526' }}>Books Reviewed</Typography>
      </StatisticItem>
    </Statistics>
  );
};

export default StatisticsSection;