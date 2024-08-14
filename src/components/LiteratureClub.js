import React from 'react';
import WelcomeSection from './WelcomeSection';
import StatisticsSection from './StatisticsSection';
import EventsSection from './EventsSection';
import DiscussSection from './DiscussSection';
import GetInTouchSection from './GetInTouchSection';
import TeamHeads from './TeamHeads';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import Header from './Header';

const Background = styled(Box)({
  background: 'linear-gradient(135deg, #021526, #03346E, #6EACDA, #E2E2B6)',
  minHeight: '100vh',
  padding: '20px'
});

const LiteratureClub = () => {
  return (
    <Background>  
      <Header/>
      <WelcomeSection />
      <StatisticsSection />
      <br/><br/>
      <EventsSection />
      <br/><br/>
      <DiscussSection />
      
      <GetInTouchSection />
      <br/>
      <TeamHeads/>
      </Background> 
  );
};

export default LiteratureClub;