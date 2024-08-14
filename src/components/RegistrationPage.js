// import React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import axios from 'axios';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   FormLabel,
// } from '@mui/material';
// import { styled } from '@mui/system';
// import {
//   AccountCircle,
//   Email,
//   Lock,
//   Phone,
// } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom';
// import './Registration.css';

// const Background = styled(Box)({
//   display: 'flex',
//   height: '100vh',
//   justifyContent: 'center',
//   alignItems: 'center',
//   background: 'linear-gradient(135deg, #021526, #6EACDA)',
// });

// const RegistrationBox = styled(Box)({
//   backgroundColor: 'white',
//   borderRadius: '8px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   padding: '40px',
//   maxWidth: '600px',
//   width: '100%',
//   marginTop: '50px',
// });

// const CustomTextField = styled(TextField)({
//   marginBottom: '20px',
//   backgroundColor: 'white',
//   borderRadius: '4px',
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#6EACDA',
//     },
//     '&:hover fieldset': {
//       borderColor: '#03346E',
//     },
//   },
//   '& .MuiInputBase-input': {
//     fontFamily: 'Montserrat, sans-serif',
//     color: '#03346E',
//   },
//   '& .MuiInputLabel-root': {
//     fontFamily: 'Montserrat, sans-serif',
//     color: '#03346E',
//   },
// });

// const IconBox = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginRight: '10px',
//   color: '#03346E',
// });

// const validationSchema = yup.object({
//   fullName: yup.string().required('Full Name is required'),
//   username: yup.string().required('Username is required'),
//   email: yup
//     .string()
//     .email('Enter a valid email')
//     .required('Email is required'),
//   phoneNumber: yup
//     .string()
//     .matches(/^[0-9]+$/, 'Phone number is not valid')
//     .required('Phone Number is required'),
//   password: yup
//     .string()
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
//   gender: yup.string().required('Gender is required'),
// });

// const RegistrationPage = ({ setRegisteredUsers }) => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       fullName: '',
//       username: '',
//       email: '',
//       phoneNumber: '',
//       password: '',
//       confirmPassword: '',
//       gender: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       const newUser = {
//         fullName: values.fullName,
//         username: values.username,
//         email: values.email,
//         phoneNumber: values.phoneNumber,
//         password: values.password,
//         gender: values.gender,
//       };

//       try {
//         const response = await axios.post('http://localhost:8080/reg', newUser);
//         console.log(response.data);
//         alert('Registration successful! Redirecting to login page.');
//         navigate('/login'); 
//       } catch (error) {
//         console.error('There was an error registering the user!', error);
//       }
//     },
//   });

//   return (
//     <Background>
//       <RegistrationBox>
//         <Typography
//           variant="h5"
//           className="montserrat"
//           sx={{ marginBottom: '20px', color: '#03346E', textAlign: 'center' }}
//         >
//           Registration
//         </Typography>
//         <form onSubmit={formik.handleSubmit}>
//           <Box display="flex" justifyContent="space-between">
//             <Box display="flex" alignItems="center" width="48%">
//               <IconBox>
//                 <AccountCircle />
//               </IconBox>
//               <CustomTextField
//                 fullWidth
//                 variant="outlined"
//                 id="fullName"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formik.values.fullName}
//                 onChange={formik.handleChange}
//                 error={
//                   formik.touched.fullName &&
//                   Boolean(formik.errors.fullName)
//                 }
//                 helperText={
//                   formik.touched.fullName && formik.errors.fullName
//                 }
//               />
//             </Box>
//             <Box display="flex" alignItems="center" width="48%">
//               <IconBox>
//                 <AccountCircle />
//               </IconBox>
//               <CustomTextField
//                 fullWidth
//                 variant="outlined"
//                 id="username"
//                 name="username"
//                 placeholder="Username"
//                 value={formik.values.username}
//                 onChange={formik.handleChange}
//                 error={
//                   formik.touched.username &&
//                   Boolean(formik.errors.username)
//                 }
//                 helperText={
//                   formik.touched.username && formik.errors.username
//                 }
//               />
//             </Box>
//           </Box>
//           <Box display="flex" justifyContent="space-between">
//             <Box display="flex" alignItems="center" width="48%">
//               <IconBox>
//                 <Email />
//               </IconBox>
//               <CustomTextField
//                 fullWidth
//                 variant="outlined"
//                 id="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}
//               />
//             </Box>
//             <Box display="flex" alignItems="center" width="48%">
//               <IconBox>
//                 <Phone />
//               </IconBox>
//               <CustomTextField
//                 fullWidth
//                 variant="outlined"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 value={formik.values.phoneNumber}
//                 onChange={formik.handleChange}
//                 error={
//                   formik.touched.phoneNumber &&
//                   Boolean(formik.errors.phoneNumber)
//                 }
//                 helperText={
//                   formik.touched.phoneNumber && formik.errors.phoneNumber
//                 }
//               />
//             </Box>
//           </Box>
//           <Box display="flex" justifyContent="space-between">
//             <Box display="flex" alignItems="center" width="48%">
//               <IconBox>
//                 <Lock />
//               </IconBox>
//               <CustomTextField
//                 fullWidth
//                 variant="outlined"
//                 id="password"
//                 name="password"
//                 placeholder="Password"
//                 type="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 error={
//                   formik.touched.password &&
//                   Boolean(formik.errors.password)
//                 }
//                 helperText={formik.touched.password && formik.errors.password}
//               />
//             </Box>
//             <Box display="flex" alignItems="center" width="48%">
//               <IconBox>
//                 <Lock />
//               </IconBox>
//               <CustomTextField
//                 fullWidth
//                 variant="outlined"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 type="password"
//                 value={formik.values.confirmPassword}
//                 onChange={formik.handleChange}
//                 error={
//                   formik.touched.confirmPassword &&
//                   Boolean(formik.errors.confirmPassword)
//                 }
//                 helperText={
//                   formik.touched.confirmPassword &&
//                   formik.errors.confirmPassword
//                 }
//               />
//             </Box>
//           </Box>
//           <FormControl
//             component="fieldset"
//             sx={{ marginTop: '20px' }}
//           >
//             <FormLabel
//               component="legend"
//               sx={{ color: '#03346E', fontFamily: 'Montserrat, sans-serif' }}
//             >
//               Gender
//             </FormLabel>
//             <RadioGroup
//               aria-label="gender"
//               name="gender"
//               value={formik.values.gender}
//               onChange={formik.handleChange}
//               sx={{ display: 'flex', flexDirection: 'row' }}
//             >
//               <FormControlLabel
//                 value="female"
//                 control={<Radio />}
//                 label="Female"
//               />
//               <FormControlLabel
//                 value="male"
//                 control={<Radio />}
//                 label="Male"
//               />
//               <FormControlLabel
//                 value="other"
//                 control={<Radio />}
//                 label="Other"
//               />
//             </RadioGroup>
//             {formik.touched.gender && formik.errors.gender && (
//               <Typography variant="body2" color="error">
//                 {formik.errors.gender}
//               </Typography>
//             )}
//           </FormControl>
//           <Button
//             color="primary"
//             variant="contained"
//             fullWidth
//             type="submit"
//             sx={{
//               marginTop: '20px',
//               backgroundColor: '#03346E',
//               '&:hover': {
//                 backgroundColor: '#021526',
//               },
//               fontFamily: 'Montserrat, sans-serif',
//             }}
//           >
//             Register
//           </Button>
//           <Typography
//             variant="body2"
//             sx={{
//               marginTop: '10px',
//               textAlign: 'center',
//               color: '#03346E',
//               fontFamily: 'Montserrat, sans-serif',
//             }}
//           >
//             Already have an account?{' '}
//             <Link to="/login" style={{ color: '#6EACDA' }}>
//               Login
//             </Link>
//           </Typography>
//         </form>
//       </RegistrationBox>
//     </Background>
//   );
// };

// export default RegistrationPage;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './Registration.css'; // Import the CSS file for styling

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     username: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     gender: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/reg', formData)
//       .then(response => {
//         setSuccess('Registration successful!');
//         setFormData({
//           fullName: '',
//           username: '',
//           email: '',
//           phoneNumber: '',
//           password: '',
//           gender: ''
//         });
//         setError('');
//       })
//       .catch(error => {
//         setError('Registration failed.');
//         setSuccess('');
//       });
//   };

//   return (
//     <div className="registration-form">
//       <h2>Register</h2>
//       {error && <div className="error">{error}</div>}
//       {success && <div className="success">{success}</div>}
//       <form onSubmit={handleSubmit}>
//         <label>Full Name:</label>
//         <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//         <label>Username:</label>
//         <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         <label>Phone Number:</label>
//         <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         <label>Gender:</label>
//         <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Registration;
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Header from './HeaderOld';
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { styled } from '@mui/system';
import {
  AccountCircle,
  Email,
  Lock,
  Phone,
  Home,
  School,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import Footer from './Footer';

const Background = styled(Box)({
  display: 'flex',
  height: '110vh',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #021526, #6EACDA)',
});

const RegistrationBox = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '40px',
  maxWidth: '650px',
  width: '100%',
  marginTop: '100px',
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

const IconBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '10px',
  color: '#03346E',
});

const validationSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number is not valid')
    .required('Phone Number is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: yup.string().required('Gender is required'),
  institution: yup.string().required('Institution is required'),
  degree: yup.string().required('Degree is required'),
  address: yup.string().required('Address is required'),
});

const RegistrationPage = ({ setRegisteredUsers }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      gender: '',
      institution: '',
      degree: '',
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const newUser = {
        fullName: values.fullName,
        username: values.username,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        gender: values.gender,
        institution: values.institution,
        degree: values.degree,
        address: values.address,
      };

      try {
        const response = await axios.post('http://localhost:8080/reg', newUser);
        console.log(response.data);
        alert('Registration successful! Redirecting to login page.');
        navigate('/login'); 
      } catch (error) {
        console.error('There was an error registering the user!', error);
      }
    },
  });

  return (
    <Background>
      <Header/>
      <RegistrationBox>
        <Typography
          variant="h5"
          className="montserrat"
          sx={{ marginBottom: '20px', color: '#03346E', textAlign: 'center' }}
        >
          Registration
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" width="48%">
              <IconBox>
                <AccountCircle />
              </IconBox>
              <CustomTextField
                fullWidth
                variant="outlined"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={
                  formik.touched.fullName &&
                  Boolean(formik.errors.fullName)
                }
                helperText={
                  formik.touched.fullName && formik.errors.fullName
                }
              />
            </Box>
            <Box display="flex" alignItems="center" width="48%">
              <IconBox>
                <AccountCircle />
              </IconBox>
              <CustomTextField
                fullWidth
                variant="outlined"
                id="username"
                name="username"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username &&
                  Boolean(formik.errors.username)
                }
                helperText={
                  formik.touched.username && formik.errors.username
                }
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" width="48%">
              <IconBox>
                <Email />
              </IconBox>
              <CustomTextField
                fullWidth
                variant="outlined"
                id="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box display="flex" alignItems="center" width="48%">
              <IconBox>
                <Phone />
              </IconBox>
              <CustomTextField
                fullWidth
                variant="outlined"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" width="48%">
              <IconBox>
                <School />
              </IconBox>
              <CustomTextField
                fullWidth
                variant="outlined"
                id="institution"
                name="institution"
                placeholder="Institution"
                value={formik.values.institution}
                onChange={formik.handleChange}
                error={
                  formik.touched.institution &&
                  Boolean(formik.errors.institution)
                }
                helperText={
                  formik.touched.institution && formik.errors.institution
                }
              />
            </Box>
            <Box display="flex" alignItems="center" width="48%">
              <IconBox>
                <School />
              </IconBox>
              <CustomTextField
                fullWidth
                variant="outlined"
                id="degree"
                name="degree"
                placeholder="Degree"
                value={formik.values.degree}
                onChange={formik.handleChange}
                error={
                  formik.touched.degree &&
                  Boolean(formik.errors.degree)
                }
                helperText={
                  formik.touched.degree && formik.errors.degree
                }
              />
            </Box>
          </Box>
          <Box display="flex" alignItems="center" width="100%">
            <IconBox>
              <Home />
            </IconBox>
            <CustomTextField
              fullWidth
              variant="outlined"
              id="address"
              name="address"
              placeholder="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" width="48%">
              <IconBox>
                <Lock />
              </IconBox>
              <CustomTextField
                fullWidth
                variant="outlined"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password &&
                  Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Box display="flex" alignItems="center" width="48%">
              <IconBox>
                <Lock />
              </IconBox>
              <CustomTextField
                fullWidth
                variant="outlined"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </Box>
          </Box>
          <FormControl
            component="fieldset"
            sx={{ marginTop: '20px' }}
          >
            <FormLabel
              component="legend"
              sx={{ color: '#03346E', fontFamily: 'Montserrat, sans-serif' }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            {formik.touched.gender && formik.errors.gender && (
              <Typography variant="body2" color="error">
                {formik.errors.gender}
              </Typography>
            )}
          </FormControl>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              marginTop: '20px',
              backgroundColor: '#03346E',
              '&:hover': {
                backgroundColor: '#021526',
              },
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Register
          </Button>
          <Typography
            variant="body2"
            sx={{
              marginTop: '10px',
              textAlign: 'center',
              color: '#03346E',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#6EACDA' }}>
              Login
            </Link>
          </Typography>
        </form>
      </RegistrationBox>
      {/* <Footer/> */}
    </Background>
  );
};

export default RegistrationPage;