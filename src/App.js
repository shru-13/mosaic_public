import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Survey from './components/Survey';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Home from './components/Home';


import './App.css';
import Login from './components/login';
import Calendar from 'react-calendar';
import AdminDashboard from './components/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import LiteratureClub from './components/LiteratureClub';
import Statistics from './components/Statistics';
import ProfilePage from './components/ProfilePage';
import WelcomeSection from './components/WelcomeSection';
import StatisticsSection from './components/StatisticsSection';
import EventsSection from './components/EventsSection';
import DiscussSection from './components/DiscussSection';
import GetInTouchSection from './components/GetInTouchSection';
import UserDashboard from './components/UserDashboard';
import { Container } from '@mui/material';
import CertificateGenerator from './components/CertificateGenerator';
import MusicDashboard from './components/MusicDashboard';
import ArtClub from './components/ArtClub';
import ContactUs from './components/ContactUs';
import RegistrationPage from './components/RegistrationPage';
import ScrollToTop from './components/ScrollToUp';
import SportClub from './components/SportClub';
import CodingClub from './components/CodingClub';
import Landing from './assets/Landing';
import Participate from './components/Participation.jsx';
import Participation from'./components/Participation.jsx';
import Data from './components/Data.js';
import Certificates from './components/CertificateGenerator';
import CertificatePreview from './components/CertificatePreview.js';
import AdminPart3 from './components/AdminPart3.js';
import ArtAdmin from './components/AdminArts.js';
import AdminSports from './components/AdminSports.js';
import AdminMusicClub from './components/AdminMusic.js';
import AdminCodingClub from './components/AdminCoding.js';
import Part1Admin from './components/Part1Admin.js';
import AdminPost from './components/AdminPost.js';
import Blog from './components/Blog.js';
import MainBlog from './components/MainBlog.js';
import Awards from './components/Awards.js';
import SportCert from './components/Sportcert.js';
import MusicCert from './components/MusicCert.js';
import CodingCert from './components/CodingCert.js';
import ArtCert from './components/ArtCert.js';
import MyCertificates from './components/MyCertificate.js';
import TodoItem from './components/ToDoList.js';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const events = [
    { date: '2024-07-30', name: 'Event 1', description: 'This is the first event.' },
    { date: '2024-08-01', name: 'Event 2', description: 'This is the second event.' },
    { date: '2024-08-01', name: 'Event 3', description: 'This is another event on the same day.' },
    { date: '2024-08-15', name: 'Event 4', description: 'This is the fourth event.' },
  ];

  return (
    <div className="app-container">
      <ScrollToTop/>
      <main className="main-content">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/dash" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path= "/survey" element ={<Survey/>}/>
          <Route path= "/login" element ={<Login/>}/>
          <Route path="/event" element = {Event}/>
          <Route path= "/lit" element = {<LiteratureClub/>}/>
          <Route path = "/admin" element = {<AdminDashboard/>}/>
          <Route path = "/stat" element = {<AdminPart3/>}/>
          <Route path="/profile" element = {<ProfilePage/>}/>
          <Route path="/lit2" element = {<StatisticsSection/>}/>
          <Route path="/lit3" element = {<EventsSection/>}/>
          <Route path="/lit4" element = {<DiscussSection/>}/>
          <Route path="/part" element = {<Participation/>}/>
          <Route path="/lit5" element = {<GetInTouchSection/>}/>
          <Route path="/user" element = {<UserDashboard/>}/>
          <Route path="/coding" element = {<CodingClub/>}/>
          <Route path="/data" element = {<Data/>}/>
          <Route path="/mycert" element = {<MyCertificates/>}/>
          <Route path="/contact" element = {<ContactUs/>}/>
          <Route path="/arts" element = {<ArtClub/>}/>
          <Route path="/reg" element = {<RegistrationPage/>}/>
          <Route path="/part3" element = {<AdminPart3/>}/>
          <Route path="/sports" element = {<SportClub/>}/>
          <Route path="/music" element = {<MusicDashboard/>}/>
          <Route path="/artadmin" element = {<ArtAdmin/>}/>
          <Route path="/sportadmin" element = {<AdminSports/>}/>
          <Route path="/musicadmin" element = {<AdminMusicClub/>}/>
          <Route path="/codingadmin" element = {<AdminCodingClub/>}/>
          <Route path="/blog" element = {<Blog/>}/>
          <Route path="/mainblog" element = {<MainBlog/>}/>
          <Route path="/admin1" element = {<Part1Admin/>}/>
          <Route path="/adminpost" element = {<AdminPost/>}/>
          <Route path="/awards" element = {<Awards/>}/>
          <Route path="/sportcert" element = {<SportCert/>}/>
          <Route path="/musiccert" element = {<MusicCert/>}/>
          <Route path="/codingcert" element = {<CodingCert/>}/>
          <Route path="/artcert" element = {<ArtCert/>}/>
          <Route path="/todo" element = {<TodoItem/>}/>
          <Route path="/artcertificate" element={<Certificates />} />
        <Route path="/artcertificate/:userName" element={<CertificatePreview />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
