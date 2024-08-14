import React, { useEffect, useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import video from '../assets/codingcert.mp4'; // Video from local storage
import certificateBg from '../assets/certnew.png'; // Certificate background from local storage
import html2canvas from 'html2canvas';

const drawerWidth = 240;

const CodingCert = () => {
  const [members, setMembers] = useState([]);
  const [preview, setPreview] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const certificateRef = useRef(null);

  useEffect(() => {
    // Fetch the list of members from the backend
    axios.get('http://localhost:8080/coding-club/members')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('Error fetching members:', error);
      });
  }, []);

  const generateCertificate = (member) => {
    const certificate = certificateRef.current;

    // Set the content of the certificate
    const nameElement = certificate.querySelector('#name');
    const degreeElement = certificate.querySelector('#degree');
    const instructorElement = certificate.querySelector('#instructor');
    const dateElement = certificate.querySelector('#date');

    nameElement.textContent = member.name;
    degreeElement.textContent = `Degree: ${member.degree}`;
    instructorElement.textContent = 'Instructor: John Doe';
    dateElement.textContent = 'Date: August 11, 2024';

    // Ensure the certificate is visible
    certificate.style.visibility = 'visible';
    certificate.style.display = 'block'; // Ensure it's displayed

    // Delay to ensure rendering
    setTimeout(() => {
      html2canvas(certificate, { useCORS: true, scale: 2 }).then((canvas) => {
        setPreview(canvas.toDataURL('image/png'));
        setPopupOpen(true); // Open the popup
        // Ensure the certificate is hidden again after capture
        certificate.style.visibility = 'hidden';
        certificate.style.display = 'none'; // Ensure it's hidden
      });
    }, 500); // Adjust delay if necessary
  };

  const downloadCertificate = () => {
    if (preview) {
      const link = document.createElement('a');
      link.download = 'Certificate.png';
      link.href = preview;
      link.click();
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

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
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#405D72', p: 3 }}>
        <Toolbar />
        {/* Video Banner Section */}
        <Box
          sx={{
            height: 500,
            mb: 4,
          }}
        >
          <video
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
            src={video}
            autoPlay
            loop
            muted
          />
        </Box>
        {/* Certificate Template */}
        <Box
          ref={certificateRef}
          sx={{
            display: 'none', // Initially hidden
            position: 'absolute', // Ensure it doesn’t interfere with the layout
            width: '841.89px', // A4 width in pixels
            height: '595.28px', // A4 height in pixels
            backgroundImage: `url(${certificateBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            visibility: 'hidden',
          }}
        >
          <Typography id="name" sx={{ position: 'absolute', top: '250px', left: '320px', fontSize: '28px', color: '#000', textAlign: 'center' }}>
            {/* Member Name */}
          </Typography>
          <Typography id="degree" sx={{ position: 'absolute', top: '320px', left: '320px', fontSize: '18px', color: '#000', textAlign: 'center' }}>
            {/* Member Degree */}
          </Typography>
          <Typography id="instructor" sx={{ position: 'absolute', top: '370px', left: '320px', fontSize: '18px', color: '#000', textAlign: 'center' }}>
            {/* Instructor Name */}
          </Typography>
          <Typography id="date" sx={{ position: 'absolute', top: '420px', left: '320px', fontSize: '18px', color: '#000', textAlign: 'center' }}>
            {/* Date */}
          </Typography>
        </Box>
        {/* Members List Section */}
        <Grid container spacing={2}>
          {members.map((member) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 1,
                  textAlign: 'center',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography variant="h6" sx={{ color: '#000000' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  Degree: {member.degree}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  Email: {member.email}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 ,backgroundColor: '#405D72'}}
                  onClick={() => generateCertificate(member)}
                >
                  Generate Certificate
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* Certificate Preview Pop-Up */}
        {isPopupOpen && (
          <Box
            sx={{
              position: 'fixed',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '600px',
              height: 'auto',
              bgcolor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 1300, // Ensure the popup is on top
              opacity: isPopupOpen ? 1 : 0, // Ensure opacity transition
              transition: 'opacity 0.3s ease', // Smooth transition
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: '#000000' }}>
              Certificate Preview
            </Typography>
            {preview && (
              <img
                src={preview}
                alt="Certificate Preview"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '8px',
                  border: '2px solid #021526',
                  background: 'rgba(255, 255, 255, 0.7)',
                  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                }}
              />
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
                onClick={downloadCertificate}
              >
                Download Certificate
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={closePopup}
              >
                Close
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CodingCert;


// import React, { useEffect, useState, useRef } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import video from '../assets/codingcert.mp4';
// import certificateBg from '../assets/certnew.png';
// import html2canvas from 'html2canvas';

// const drawerWidth = 240;

// const CodingCert = () => {
//   const [members, setMembers] = useState([]);
//   const [preview, setPreview] = useState(null);
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const certificateRef = useRef(null);

//   useEffect(() => {
//     axios.get('http://localhost:8080/coding-club/members')
//       .then(response => {
//         setMembers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching members:', error);
//       });
//   }, []);

//   const generateCertificate = (member) => {
//     const certificate = certificateRef.current;
//     const nameElement = certificate.querySelector('#name');
//     const degreeElement = certificate.querySelector('#degree');
//     const instructorElement = certificate.querySelector('#instructor');
//     const dateElement = certificate.querySelector('#date');

//     nameElement.textContent = member.name;
//     degreeElement.textContent = `Degree: ${member.degree}`;
//     instructorElement.textContent = 'Instructor: John Doe';
//     dateElement.textContent = 'Date: August 11, 2024';

//     certificate.style.visibility = 'visible';
//     certificate.style.display = 'block';

//     setTimeout(() => {
//       html2canvas(certificate, { useCORS: true, scale: 2 }).then((canvas) => {
//         setPreview(canvas.toDataURL('image/png'));
//         setPopupOpen(true);
//         certificate.style.visibility = 'hidden';
//         certificate.style.display = 'none';
//       });
//     }, 500);
//   };

//   const downloadCertificate = () => {
//     if (preview) {
//       const link = document.createElement('a');
//       link.download = 'Certificate.png';
//       link.href = preview;
//       link.click();
//     }
//   };

//   const sendCertificate = (member) => {
//     axios.post('http://localhost:8080/certificates/send', {
//       fullName: member.name,
//       degree: member.degree,
//       email: member.email,
//     })
//     .then(response => {
//       alert('Certificate sent successfully!');
//     })
//     .catch(error => {
//       console.error('Error sending certificate:', error);
//     });
//   };

//   const closePopup = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#021526' }}>
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div" color={'#6EACDA'} sx={{ flexGrow: 1 }}>
//             Admin Dashboard
//           </Typography>
//           <Typography variant="body1" sx={{ color: '#E2E2B6' }}>
//             Welcome, Admin!
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//             backgroundColor: '#021526',
//             color: '#E2E2B6',
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {[
//               { text: 'Dashboard', link: '/stat' },
//               { text: 'Users', link: '/data' },
//               { text: 'Posts', link: '/adminpost' },
//               { text: 'Certificates', link: '/awards' },
//             ].map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton component={Link} to={item.link}>
//                   <ListItemText primary={item.text} sx={{ color: '#E2E2B6' }} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, bgcolor: '#405D72', p: 3 }}>
//         <Toolbar />
//         <Box
//           sx={{
//             height: 500,
//             mb: 4,
//           }}
//         >
//           <video
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               borderRadius: '8px',
//             }}
//             src={video}
//             autoPlay
//             loop
//             muted
//           />
//         </Box>
//         <Box
//           ref={certificateRef}
//           sx={{
//             display: 'none',
//             position: 'absolute',
//             width: '841.89px',
//             height: '595.28px',
//             backgroundImage: `url(${certificateBg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             visibility: 'hidden',
//           }}
//         >
//           <Typography id="name" sx={{ position: 'absolute', top: '250px', left: '320px', fontSize: '28px', color: '#000', textAlign: 'center' }}></Typography>
//           <Typography id="degree" sx={{ position: 'absolute', top: '320px', left: '320px', fontSize: '18px', color: '#000', textAlign: 'center' }}></Typography>
//           <Typography id="instructor" sx={{ position: 'absolute', top: '370px', left: '320px', fontSize: '18px', color: '#000', textAlign: 'center' }}></Typography>
//           <Typography id="date" sx={{ position: 'absolute', top: '420px', left: '320px', fontSize: '18px', color: '#000', textAlign: 'center' }}></Typography>
//         </Box>
//         <Grid container spacing={2}>
//           {members.map((member) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
//               <Box
//                 sx={{
//                   padding: 2,
//                   backgroundColor: '#FFFFFF',
//                   borderRadius: 1,
//                   textAlign: 'center',
//                   boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//                 }}
//               >
//                 <Typography variant="h6" sx={{ color: '#000000' }}>
//                   {member.name}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: '#000000' }}>
//                   Degree: {member.degree}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: '#000000' }}>
//                   Email: {member.email}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{ mt: 2 ,backgroundColor: '#405D72'}}
//                   onClick={() => generateCertificate(member)}
//                 >
//                   Generate Certificate
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   sx={{ mt: 2 ,backgroundColor: '#03346E'}}
//                   onClick={() => sendCertificate(member)}
//                 >
//                   Send Certificate
//                 </Button>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//         {isPopupOpen && (
//           <Box
//             sx={{
//               position: 'fixed',
//               top: '20%',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '90%',
//               maxWidth: '600px',
//               height: 'auto',
//               bgcolor: 'rgba(255, 255, 255, 0.9)',
//               borderRadius: '8px',
//               boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
//               padding: 3,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               zIndex: 1300,
//               opacity: isPopupOpen ? 1 : 0,
//               transition: 'opacity 0.3s ease',
//             }}
//           >
//             <Typography variant="h6" sx={{ mb: 2, color: '#000000' }}>
//               Certificate Preview
//             </Typography>
//             {preview && (
//               <img
//                 src={preview}
//                 alt="Certificate Preview"
//                 style={{
//                   width: '100%',
//                   maxWidth: '500px',
//                   borderRadius: '8px',
//                   border: '2px solid #021526',
//                   background: 'rgba(255, 255, 255, 0.7)',
//                   padding: '8px',
//                 }}
//               />
//             )}
//             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//               <Button
//                 variant="contained"
//                 sx={{ mr: 2, backgroundColor: '#405D72' }}
//                 onClick={downloadCertificate}
//               >
//                 Download
//               </Button>
//               <Button
//                 variant="contained"
//                 sx={{ backgroundColor: '#03346E' }}
//                 onClick={closePopup}
//               >
//                 Close
//               </Button>
//             </Box>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default CodingCert;
