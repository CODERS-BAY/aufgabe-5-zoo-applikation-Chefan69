import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Layout from '../../layout/Layout';
import ServiceList from '../../src/services/ServiceList';

const HomePage = () => {
    return (
        <Layout>
            <Box sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Home
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '720px' }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)', width: '70%', maxWidth: '1344px' }}>
                    <Typography variant="h5" gutterBottom>
                        Wählen Sie Ihren Service
                    </Typography>
                    <ServiceList />
                </Paper>
            </Box>
        </Layout>
    );
};

export default HomePage;