
import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, TextField, Container, Card, CardContent, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import img from '../assets/adminpost.jpg';

const drawerWidth = 240;

const AdminAppBar = styled(AppBar)(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: `${drawerWidth}px`,
  backgroundColor: '#021526',
}));

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
   backgroundColor: '#508C9B',
  alignItems: 'center',
}));

const Section = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(4),
}));

const PostContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(5),
  borderRadius: '15px',
  boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
  color: '#E2E2B6',
  maxWidth: '1300px',
  margin: '0 auto',
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '15px',
  zIndex: 1,
}));

const PostContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(4),
  width:'500px',
}));

const PostButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#021526',
  marginTop: '20px',
  borderRadius: '25px',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

const PostTitle = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  textAlign: 'center',
  marginBottom: '20px',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '20px',
  backgroundColor: '#FFFFFF',
  borderRadius: '5px',
  '& label.Mui-focused': {
    color: '#021526',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#6EACDA',
    },
    '&:hover fieldset': {
      borderColor: '#5D9EC3',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6EACDA',
    },
  },
}));

const PostCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1D2A36',
  color: '#E2E2B6',
  marginBottom: '20px',
  borderRadius: '15px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

const PostCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
}));

const AdminPost = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handlePost = async () => {
    if (title && message) {
      try {
        await axios.post('http://localhost:8080/api/posts', { title, message });
        setTitle('');
        setMessage('');
        // Refresh blogs list after posting
        const response = await axios.get('http://localhost:8080/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#021526',
            color: '#E2E2B6',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[
              { text: 'Dashboard', link: '/stat' },
              { text: 'Users', link: '/data' },
              { text: 'Posts', link: '/adminpost' },
              { text: 'Certificates', link: '/awards' },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemText primary={item.text} sx={{ color: '#E2E2B6' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1 }}>
        <AdminAppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap component="div" color={'#6EACDA'} sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Typography variant="body1" sx={{ color: '#E2E2B6' }}>
              Welcome, Admin!
            </Typography>
          </Toolbar>
        </AdminAppBar>

        <MainContent>
          <Section>
            <PostContainer>
              <Overlay />
              <PostContent>
                <PostTitle variant="h4">Create a New Post</PostTitle>
                <StyledTextField
                  placeholder="Title"
                  variant="outlined"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <StyledTextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <PostButton onClick={handlePost} sx= {{backgroundColor:'#021526', color:'#F8EDED'}}>Post</PostButton>
              </PostContent>
            </PostContainer>
          </Section>

          <Section>
            <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px', color: '#FFFFFF' }}>
              User Blog Posts
            </Typography>
            {blogs.length > 0 ? (
              blogs.map(blog => (
                <PostCard key={blog.id}>
                  <PostCardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccountCircleIcon sx={{ marginRight: '10px' }} />
                      <Typography variant="h5">{blog.title}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ marginTop: '10px' }}>{blog.description}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        <strong>Author:</strong> {blog.fullname} ({blog.email})
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* <CalendarTodayIcon sx={{ marginRight: '5px' }} /> */}
                        {/* <Typography variant="body2">{new Date(blog.createdAt).toLocaleDateString()}</Typography> */}
                      </Box>
                    </Box>
                  </PostCardContent>
                </PostCard>
              ))
            ) : (
              <Typography variant="body1" sx={{ color: '#FFFFFF' }}>No blog posts available.</Typography>
            )}
          </Section>
        </MainContent>
      </Box>
    </Box>
  );
};

export default AdminPost;
