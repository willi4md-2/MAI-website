import * as React from 'react';
import TestCard from '../Cards/TestCard';
import Box from '@mui/material/Box';
import './Inventory.css';

export default function Inventory() {

  return (
    
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '25px'}}>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
    </Box>
  );
}