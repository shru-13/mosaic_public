
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { AccountCircle, Lock } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext'; // Import the UserContext
import './login.css';
import Header from './HeaderOld';

const Background = styled(Box)({
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #021526 30%, #03346E 70%)',
});

const LoginBox = styled(Box)({
  display: 'flex',
  backgroundColor: '#E2E2B6',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  maxWidth: '800px',
  width: '100%',
  marginTop: '30px',
});

const LeftBox = styled(Box)({
  background: 'linear-gradient(135deg, #03346E, #6EACDA)',
  color: 'white',
  padding: '40px',
  flex: 1,
});

const RightBox = styled(Box)({
  padding: '40px',
  flex: 1,
});

const CustomTextField = styled(TextField)({
  marginBottom: '20px',
  backgroundColor: 'white',
  borderRadius: '4px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#6EACDA',
    },
    '&:hover fieldset': {
      borderColor: '#03346E',
    },
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Montserrat, sans-serif',
    color: '#03346E',
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Montserrat, sans-serif',
    color: '#03346E',
  },
});

const InputContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  '& .MuiIconButton-root': {
    paddingRight: '10px',
  }
});

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Use UserContext

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    return usernameRegex.test(username);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setUsernameError('');
    setPasswordError('');

    let isValid = true;

    if (!username) {
      setUsernameError('Username is required.');
      isValid = false;
    } else if (!validateUsername(username)) {
      setUsernameError('Username must be 3-15 characters long and contain only letters, numbers, and underscores.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one letter and one number.');
      isValid = false;
    }

    if (!isValid) return;

    try {
      if (username === 'Admin' && password === 'Admin123') {
        navigate('/part3');
        return;
      }

      console.log('Sending login request:', { username, password });
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password
      });

      if (response.status === 200) {
        setUser(response.data); // Set user data in context
        navigate('/dash');
      }
    } catch (error) {
      console.log('Error:', error);
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <Background>
      <Header/>
      <LoginBox>
        <LeftBox>
          <Typography variant="h4" className="montserrat">
            Welcome to Mosaic
          </Typography>
          <Typography variant="body1" className="montserrat" sx={{ marginTop: '20px' }}>
            Welcome back to Mosaic! To access your account and enjoy all the features our app offers.
          </Typography>
        </LeftBox>
        <RightBox>
          <Typography variant="h5" className="montserrat" sx={{ marginBottom: '20px', color: '#03346E' }}>
            USER LOGIN
          </Typography>
          <form onSubmit={handleLogin}>
            <InputContainer>
              <IconButton>
                <AccountCircle sx={{ color: '#03346E' }} />
              </IconButton>
              <CustomTextField
                fullWidth
                variant="outlined"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  className: 'montserrat',
                }}
              />
            </InputContainer>
            {usernameError && (
              <Typography variant="body2" className="montserrat" sx={{ color: 'red', marginBottom: '20px' }}>
                {usernameError}
              </Typography>
            )}
            <InputContainer>
              <IconButton>
                <Lock sx={{ color: '#03346E' }} />
              </IconButton>
              <CustomTextField
                fullWidth
                variant="outlined"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  className: 'montserrat',
                }}
              />
            </InputContainer>
            {passwordError && (
              <Typography variant="body2" className="montserrat" sx={{ color: 'red', marginBottom: '20px' }}>
                {passwordError}
              </Typography>
            )}
            {error && (
              <Typography variant="body2" className="montserrat" sx={{ color: 'red', marginBottom: '20px' }}>
                {error}
              </Typography>
            )}
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={<Typography className="montserrat">Remember me</Typography>}
              sx={{ color: '#03346E' }}
            />
            <Typography variant="body2" className="montserrat" sx={{ marginBottom: '20px', color: '#03346E', cursor: 'pointer' }}>
              Forgot password?
            </Typography>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                background: 'linear-gradient(135deg, #03346E, #6EACDA)',
                color: 'white',
                padding: '10px 0',
                fontSize: '16px',
                fontFamily: 'Montserrat, sans-serif',
                '&:hover': {
                  background: 'linear-gradient(135deg, #6EACDA, #03346E)',
                },
              }}
              disabled={!username || !password}
            >
              LOGIN
            </Button>
          </form>
          <Typography variant="body2" className="montserrat" sx={{ marginTop: '20px', color: '#03346E' }}>
            Don't have an account? <Link to="/reg">Register</Link>
          </Typography>
        </RightBox>
      </LoginBox>
    </Background>
  );
};

export default LoginPage;
