import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Paper, Typography, Grid, TextField, Button } from '@mui/material';
import axios from 'axios';

// Sample image imports from local storage
import image1 from '../assets/blog1.jpg';
import image2 from '../assets/blog2.jpg';
import image3 from '../assets/blog3.jpg';
import image4 from '../assets/blog4.jpg';
import image5 from '../assets/blog5.jpg';
import blogBackground from '../assets/mainblog.jpg'; // Add your background image here
import Header from './Header';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    pauseOnHover: false,
};

const MainBlog = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handlePost = async () => {
        if (fullname && email && title && description) {
            const formData = new FormData();
            formData.append('fullname', fullname);
            formData.append('email', email);
            formData.append('title', title);
            formData.append('description', description);

            try {
                const response = await axios.post('http://localhost:8080/api/blogs', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Blog post created:', response.data);
                // Clear form fields
                setFullname('');
                setEmail('');
                setTitle('');
                setDescription('');
            } catch (error) {
                console.error('Error creating blog post:', error.response ? error.response.data : error.message);
            }
        } else {
            console.error('All fields are required');
        }
    };

    return (
        <Box sx={{ backgroundColor: '#021526', padding: 3, fontFamily: 'Montserrat, sans-serif' }}>
            <Header />
            <Slider {...settings}>
                {[image1, image2, image3, image4, image5].map((image, index) => (
                    <Box key={index} sx={{ padding: 2, marginTop: '80px' }}>
                        <Paper
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 2,
                                boxShadow: 3,
                                height: '200px',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 4,
                                    objectFit: 'cover',
                                }}
                            />
                        </Paper>
                    </Box>
                ))}
            </Slider>

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '700px',
                    backgroundImage: `url(${blogBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    mt: 5,
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        width: { xs: '100%', md: '40%' },
                        backdropFilter: 'blur(10px)', // Frosty effect
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        zIndex: 2,
                        mr: 5,
                    }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>
                            Create a New Blog Post
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder="Fullname"
                            variant="outlined"
                            fullWidth
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            sx={{ marginBottom: '20px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ marginBottom: '20px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder="Title"
                            variant="outlined"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            sx={{ marginBottom: '20px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{ marginBottom: '20px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handlePost}
                            sx={{ backgroundColor: '#7265E3', color: '#FFFFFF', borderRadius: '30px', padding: '10px 20px', fontWeight: 'bold', '&:hover': { backgroundColor: '#5D52D3' } }}
                        >
                            Post
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default MainBlog;
