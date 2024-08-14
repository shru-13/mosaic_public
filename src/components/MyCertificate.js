import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const MyCertificates = () => {
    // Placeholder data for certificates
    const certificates = [
        { id: 1, title: 'React Developer', date: 'August 2024', issuer: 'Coursera' },
        { id: 2, title: 'JavaScript Specialist', date: 'July 2024', issuer: 'Udemy' },
        { id: 3, title: 'Frontend Master', date: 'June 2024', issuer: 'Frontend Masters' }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                My Certificates
            </Typography>
            <Grid container spacing={3}>
                {certificates.map(certificate => (
                    <Grid item xs={12} sm={6} md={4} key={certificate.id}>
                        <Card style={{ background: 'linear-gradient(to bottom right, #6EACDA, #021526)', color: 'white', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {certificate.title}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    Issued by: {certificate.issuer}
                                </Typography>
                                <Typography variant="body2" color="lightgray">
                                    Date: {certificate.date}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default MyCertificates;
