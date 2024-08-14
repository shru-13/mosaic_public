
  
  import React, { useContext, useState, useEffect } from 'react';
  import { AppBar, Box, Toolbar, Typography, IconButton, Container, Badge, Menu, MenuItem, Collapse } from '@mui/material';
  import { styled } from '@mui/system';
  import MenuIcon from '@mui/icons-material/Menu';
  import LogoutIcon from '@mui/icons-material/Logout';
  import PersonIcon from '@mui/icons-material/Person';
  import NotificationsIcon from '@mui/icons-material/Notifications';
  import LightbulbIcon from '@mui/icons-material/Lightbulb';
  import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'; // Import the blog icon
  import { UserContext } from '../components/UserContext';
  import Sidebar from '../components/Sidebar';
  import logo from '../logo.png';
  import axios from 'axios'; // Ensure axios is imported
  
  // Styles
  const FrostyAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: 'none',
    borderRadius: '15px',
    marginTop: '10px',
    padding: '0 20px',
  }));
  
  const FrostyMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
      borderRadius: '10px',
      color: '#E2E2B6',
      padding: '10px',
    },
    '& .MuiMenuItem-root': {
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
      },
    },
  }));
  
  const GlowingIcon = styled(LightbulbIcon)(({ theme, glowing }) => ({
    color: glowing ? 'yellow' : 'grey',
    transition: 'color 0.3s ease-in-out',
  }));
  
  const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [expandedNotificationId, setExpandedNotificationId] = useState(null);
  
    useEffect(() => {
      // Fetch notifications (admin posts) from the backend
      const fetchNotifications = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/posts'); // Ensure this endpoint is correct
          const posts = response.data;
          setNotifications(posts.map(post => ({
            id: post.id,
            text: post.title,
            message: post.message, // Added to store message
            unread: true,
            glowing: false,
          })));
        } catch (error) {
          console.error('Error fetching notifications:', error);
        }
      };
  
      fetchNotifications();
    }, []);
  
    const handleLogout = () => {
      setUser(null);
    };
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const handleNotificationClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleNotificationClose = () => {
      setAnchorEl(null);
    };
  
    const handleToggleGlowing = (id) => {
      setNotifications(notifications.map(notification =>
        notification.id === id ? { ...notification, glowing: !notification.glowing } : notification
      ));
      setExpandedNotificationId(id === expandedNotificationId ? null : id);
    };
  
    const unreadCount = notifications.filter(notification => notification.unread).length;
  
    return (
      <>
        <Container sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100 }}>
          <FrostyAppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ width: 100, height: 40, marginRight: 2 }}
                
              />
              <Typography variant="h5" component="div" color="#E2E2B6" sx={{ flexGrow: 2 }}>
                {/* Mosaic */}
              </Typography>
              {user ? (
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#E2E2B6' }}>
                  <Typography variant="body1" sx={{ marginRight: 2 }}>
                    Welcome, {user.username}!
                  </Typography>
                  <IconButton color="inherit">
                    <PersonIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    onClick={handleNotificationClick}
                    sx={{ ml: 2 }}
                  >
                    <Badge color="error" badgeContent={unreadCount}>
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    color="inherit"
                    href="/blog" // Change this to your blog page route
                    sx={{ ml: 2 }}
                  >
                    <LibraryBooksIcon />
                  </IconButton>
                  <FrostyMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleNotificationClose}
                  >
                    {notifications.map((notification) => (
                      <MenuItem key={notification.id} onClick={() => handleToggleGlowing(notification.id)}>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          <GlowingIcon glowing={notification.glowing} sx={{ mr: 1 }} />
                          <Typography variant="body2" sx={{ flexGrow: 1 }}>
                            {notification.text}
                          </Typography>
                        </Box>
                        <Collapse in={expandedNotificationId === notification.id}>
                          <Box sx={{ padding: '10px', backgroundColor: '#021526', borderRadius: '8px' }}>
                            <Typography variant="body2" color="#E2E2B6">
                              {notification.message}
                            </Typography>
                          </Box>
                        </Collapse>
                      </MenuItem>
                    ))}
                  </FrostyMenu>
                  <IconButton color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
                    <LogoutIcon />
                  </IconButton>
                </Box>
              ) : (
                <Typography color="#E2E2B6" variant="body1">Guest User</Typography>
              )}
            </Toolbar>
          </FrostyAppBar>
        </Container>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </>
    );
  };
  
  export default Header;
  
  