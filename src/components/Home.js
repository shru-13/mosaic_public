import React from 'react';
import Carousel from './Carousel'; // Import only once
import FAQ from './FAQ';
import Whysection from './Whysection';
import Header from '../components/Header.jsx';

const Home = () => {
    return (
        <>
            <Header/>
            <Carousel />
            
            <Whysection/>
            <FAQ />
        </>
    );
};

export default Home;
