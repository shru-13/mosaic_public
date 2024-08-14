import React, { useEffect, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import blankCert from '../assets/cert.png';

const CertificatePreview = () => {
  const { userName } = useParams();
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = blankCert;
    image.onload = () => {
      // Draw the background image
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Set up text styles
      ctx.textAlign = 'center';
      ctx.fillStyle = '#021526';
      
      // Draw the certificate title and text
      ctx.font = '20px Arial';
      ctx.fillText('This is to certify that', canvas.width / 2, 250); // Adjusted y-coordinate

      ctx.font = '25px Arial';
      ctx.fillStyle = '#021526';
      ctx.fillText(userName, canvas.width / 2, 320); // Adjusted y-coordinate

      ctx.fillStyle = '#03346E';
      ctx.font = '20px Arial';
      ctx.fillText('has successfully completed the Art Event', canvas.width / 2, 370); // Adjusted y-coordinate

      ctx.font = '18px Arial';
      ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, canvas.width / 2, 410); // Adjusted y-coordinate
      ctx.fillText('Instructor: John Doe', canvas.width / 2, 440); // Adjusted y-coordinate
    };
  }, [userName]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `Certificate_${userName}.png`;
    link.click();
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Certificate Preview</Typography>
      <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid #03346E', borderRadius: '8px' }}></canvas>
      <br/><br/>
      <Button onClick={handleDownload} sx={{
        mt: 2,
        background: 'linear-gradient(135deg, #03346E, #021526)',
        color: '#fff',
      }}>
        Download Certificate
      </Button>
      <br/><br/><br/>
    </Box>
  );
};

export default CertificatePreview;
