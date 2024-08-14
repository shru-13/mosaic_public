import React from 'react';
import './Landing.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import HeaderOld from '../components/HeaderOld';

const Landing = () => {
  return (
    <div className="landing">
        <HeaderOld/>
      <div className="content">
        <h1>Introducing</h1>
        <h1>Mosaic.</h1>
        <p className="tagline">Connect, create, conquer with clubs.</p>
        <div className="buttons">
          <Link to = "/reg"><button className="btn user">User</button></Link>
          <Link to = "/login"><button className="btn admin">Admin</button></Link>
        </div>
      </div>
      <div className="social-icons">
        <LinkedInIcon className="social-icon" />
        <InstagramIcon className="social-icon" />
        <TwitterIcon className="social-icon" />
        <FacebookIcon className="social-icon" />
      </div>
    </div>
  );
};

export default Landing;
