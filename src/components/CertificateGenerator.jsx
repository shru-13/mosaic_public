// import React, { useState } from 'react';
// import { Box, Typography, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton } from '@mui/material';
// import { styled } from '@mui/system';
// import AddIcon from '@mui/icons-material/Add';
// import bg from '../assets/certificate.jpg';

// // Styled components for better appearance
// const CertificateContainer = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   margin: theme.spacing(2),
//   backgroundColor: '#f8f8f8',
//   border: '2px solid #03346E',
//   backgroundImage: `url(${bg})`,
//   backgroundSize: 'cover', // Changed from 'contain' to 'cover'
//   backgroundPosition: 'center', // Added this line
//   backgroundRepeat: 'no-repeat',
//   borderRadius: '8px',
//   textAlign: 'center',
//   boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
// }));

// const DownloadButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   backgroundColor: '#03346E',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#021526',
//   },
// }));

// const AddStudentForm = ({ addStudent }) => {
//   const [name, setName] = useState('');
//   const [id, setId] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && id) {
//       addStudent({ id: parseInt(id, 10), name });
//       setName('');
//       setId('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
//       <TextField
//         placeholder='Student ID'
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//         sx={{
//           marginRight: '10px',
//           '& .MuiInputBase-root': {
//             background: 'linear-gradient(135deg, #E2E2B6, #6EACDA)',
//             borderRadius: '4px',
//             color: '#021526',
//           },
//           '& .MuiInputLabel-root': {
//             color: '#021526',
//           },
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: '#03346E',
//             },
//             '&:hover fieldset': {
//               borderColor: '#021526',
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: '#03346E',
//             },
//           },
//         }}
//       />
//       <TextField
//         placeholder='Student Name'
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         sx={{
//           marginRight: '10px',
//           '& .MuiInputBase-root': {
//             background: 'linear-gradient(135deg, #E2E2B6, #6EACDA)',
//             borderRadius: '4px',
//             color: '#021526',
//           },
//           '& .MuiInputLabel-root': {
//             color: '#021526',
//           },
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: '#03346E',
//             },
//             '&:hover fieldset': {
//               borderColor: '#021526',
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: '#03346E',
//             },
//           },
//         }}
//       />
//       <IconButton type="submit" color="primary">
//         <AddIcon />
//       </IconButton>
//     </form>
//   );
// };

// const Certificate = ({ name }) => {
//   return (
//     <CertificateContainer>
//       <Typography variant="h4" sx={{ color: '#021526', marginBottom: '16px' }}>
//         Certificate of Achievement
//       </Typography>
//       <Typography variant="h6" sx={{ color: '#03346E' }}>
//         This is to certify that
//       </Typography>
//       <Typography variant="h3" sx={{ color: '#6EACDA', marginTop: '16px', marginBottom: '16px' }}>
//         {name}
//       </Typography>
//       <Typography variant="h6" sx={{ color: '#03346E' }}>
//         has successfully completed the course
//       </Typography>
//       <Typography variant="body1" sx={{ marginTop: '24px' }}>
//         Date: {new Date().toLocaleDateString()}
//       </Typography>
//       <Typography variant="body1" sx={{ marginTop: '8px' }}>
//         Instructor: John Doe
//       </Typography>
//       <DownloadButton onClick={() => alert(`Downloading certificate for ${name}`)}>
//         Download Certificate
//       </DownloadButton>
//     </CertificateContainer>
//   );
// };

// const CertificateGenerator = () => {
//   const [students, setStudents] = useState([
//     { id: 1, name: 'Alice Johnson' },
//     { id: 2, name: 'Bob Smith' },
//     { id: 3, name: 'Carol Lee' },
//     // Add more students as needed
//   ]);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleGenerateCertificate = (student) => {
//     setSelectedStudent(student);
//   };

//   const addStudent = (student) => {
//     setStudents([...students, student]);
//   };

//   return (
//     <Box sx={{ padding: '20px', textAlign: 'center' }}> <br/><br/><br/>
//       <Typography variant="h2" sx={{ color: '#021526', marginBottom: '20px' }}>
//         Certificate Generator
//       </Typography>
//       <AddStudentForm addStudent={addStudent} />
//       {selectedStudent ? (
//         <Certificate name={selectedStudent.name} />
//       ) : (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>ID</TableCell>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {students.map(student => (
//                 <TableRow key={student.id}>
//                   <TableCell>{student.id}</TableCell>
//                   <TableCell>{student.name}</TableCell>
//                   <TableCell>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: '#03346E',
//                         color: '#fff',
//                         '&:hover': { backgroundColor: '#021526' }
//                       }}
//                       onClick={() => handleGenerateCertificate(student)}
//                     >
//                       Generate Certificate
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Box>
//   );
// };

// export default CertificateGenerator;
// import React, { useState, useRef, useEffect } from 'react';
// import { Box, Typography, Paper, Button, Grid } from '@mui/material';
// import { styled } from '@mui/system';
// import { Bar } from 'react-chartjs-2';
// import { useReactToPrint } from 'react-to-print';
// import AddIcon from '@mui/icons-material/Add';
// import bg from '../assets/certificate.jpg';
// import axios from 'axios';

// // Styled components for better appearance
// const ClubBox = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   margin: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   cursor: 'pointer',
//   background: 'linear-gradient(135deg, #03346E, #021526)',
//   color: '#fff',
//   '&:hover': {
//     background: 'linear-gradient(135deg, #021526, #03346E)',
//   },
// }));

// const CertificateContainer = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   margin: theme.spacing(2),
//   backgroundColor: '#f8f8f8',
//   border: '2px solid #03346E',
//   backgroundImage: `url(${bg})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   borderRadius: '8px',
//   textAlign: 'center',
//   boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
//   color: '#021526',
// }));

// const DownloadButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   background: 'linear-gradient(135deg, #03346E, #021526)',
//   color: '#fff',
//   '&:hover': {
//     background: 'linear-gradient(135deg, #021526, #03346E)',
//   },
// }));

// const Certificates = () => {
//   const [selectedClub, setSelectedClub] = useState(null);
//   const [events, setEvents] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const certificateRef = useRef();

//   useEffect(() => {
//     // Fetch events and students for the Arts club
//     if (selectedClub === 'Arts') {
//       setEvents([
//         { id: 1, name: 'Art Exhibition' },
//         { id: 2, name: 'Painting Workshop' },
//       ]);
//       setStudents([
//         { id: 1, name: 'Alice Johnson' },
//         { id: 2, name: 'Bob Smith' },
//         { id: 3, name: 'Carol Lee' },
//       ]);
//     }
//   }, [selectedClub]);

//   const handleGenerateCertificate = (student) => {
//     setSelectedStudent(student);
//   };

//   const handlePrint = useReactToPrint({
//     content: () => certificateRef.current,
//   });

//   const chartData = {
//     labels: ['Sports', 'Music', 'Coding', 'Arts'],
//     datasets: [
//       {
//         label: 'Members',
//         data: [50, 75, 100, 125],
//         backgroundColor: [
//           '#6EACDA',
//           '#E2E2B6',
//           '#03346E',
//           '#021526',
//         ],
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//       },
//       tooltip: {
//         mode: 'index',
//         intersect: false,
//       },
//     },
//   };

//   return (
//     <Box sx={{ padding: '20px', textAlign: 'center' }}>
//       <Typography variant="h2" sx={{ color: '#021526', marginBottom: '20px' }}>
//         Club Overview
//       </Typography>
//       <Grid container spacing={2}>
//         {['Sports', 'Music', 'Coding', 'Arts'].map((club) => (
//           <Grid item xs={12} md={3} key={club}>
//             <ClubBox onClick={() => setSelectedClub(club)}>
//               <Typography variant="h5">{club} Club</Typography>
//             </ClubBox>
//           </Grid>
//         ))}
//       </Grid>

//       <Box sx={{ marginTop: '40px' }}>
//         <Bar data={chartData} options={chartOptions} />
//       </Box>

//       {selectedClub === 'Arts' && (
//         <>
//           <Typography variant="h4" sx={{ color: '#021526', marginTop: '40px' }}>
//             Arts Club Events and Participants
//           </Typography>
//           <Box>
//             {events.map(event => (
//               <Box key={event.id} sx={{ marginTop: '20px' }}>
//                 <Typography variant="h6" sx={{ color: '#03346E' }}>{event.name}</Typography>
//                 <Box>
//                   {students.map(student => (
//                     <Box key={student.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
//                       <Typography>{student.name}</Typography>
//                       <DownloadButton onClick={() => handleGenerateCertificate(student)}>
//                         Generate Certificate
//                       </DownloadButton>
//                     </Box>
//                   ))}
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         </>
//       )}

//       {selectedStudent && (
//         <>
//           <CertificateContainer ref={certificateRef}>
//             <Typography variant="h4" sx={{ color: '#021526', marginBottom: '16px' }}>
//               Certificate of Achievement
//             </Typography>
//             <Typography variant="h6" sx={{ color: '#03346E' }}>
//               This is to certify that
//             </Typography>
//             <Typography variant="h3" sx={{ color: '#6EACDA', marginTop: '16px', marginBottom: '16px' }}>
//               {selectedStudent.name}
//             </Typography>
//             <Typography variant="h6" sx={{ color: '#03346E' }}>
//               has successfully participated in the event
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: '24px' }}>
//               Date: {new Date().toLocaleDateString()}
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: '8px' }}>
//               Instructor: John Doe
//             </Typography>
//           </CertificateContainer>
//           <DownloadButton onClick={handlePrint}>
//             Download Certificate
//           </DownloadButton>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Certificates;
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  Box, Typography, Button, Grid, AppBar, Toolbar,
  Drawer, List, ListItem, ListItemButton, ListItemText, Card, CardMedia, CardContent, CardActions
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image as PDFImage } from '@react-pdf/renderer';
import blankCert from '../assets/cert.png';
import previewImage from '../assets/card.jpg'; // Placeholder preview image

const drawerWidth = 240; // Define the width of the drawer

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 20,
    position: 'relative'
  },
  certificateContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: '#03346E',
    textAlign: 'center',
    margin: 10,
  },
  name: {
    fontSize: 30,
    color: '#6EACDA',
    textAlign: 'center',
    margin: 10,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});

const CertificateDocument = ({ name }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFImage src={blankCert} style={styles.backgroundImage} />
      <View style={styles.certificateContainer}>
        <Text style={styles.text}>This is to certify that</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>has successfully completed the Art Event</Text>
        <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
        <Text style={styles.text}>Instructor: John Doe</Text>
      </View>
    </Page>
  </Document>
);

const CertificatePreview = () => {
  const { userName } = useParams();

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Certificate Preview</Typography>
      <PDFDownloadLink
        document={<CertificateDocument name={userName} />}
        fileName={`Certificate_${userName}.pdf`}
        style={{
          textDecoration: 'none',
          padding: '10px 20px',
          color: '#fff',
          backgroundColor: '#03346E',
          borderRadius: 4,
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download Certificate'
        }
      </PDFDownloadLink>
    </Box>
  );
};

const Certificates = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/arts/members')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#021526' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" color={'#6EACDA'} sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E2B6' }}>
            Welcome, Admin!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#021526'
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
              { text: 'Posts', link: '/posts' },
              { text: 'Certificates', link: '/certificate' },
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
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
        <Toolbar />
        <Typography variant="h4" style={{ textAlign: 'center', margin: '20px 0' }}>
          Arts Club Certificates
        </Typography>
        <Grid container spacing={3}>
          {students.map((student, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="Certificate Preview"
                  height="200" // Increased height
                  image={previewImage}
                  title="Certificate Preview"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {student.userName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click below to preview and download the certificate.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to={`/certificate/${student.userName}`}>
                    View Certificate
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Certificates;

