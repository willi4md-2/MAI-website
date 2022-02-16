import * as React from 'react';
import Box from '@mui/material/Box';
import './Inventory.css';
import TestCardTwo from '../Cards/TestCardTwo';
import TestCard from '../Cards/TestCard';
import TestCardThree from '../Cards/TestCardThree';

export default function Inventory() {

  return (
    
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '25px'}}>
        <TestCardTwo></TestCardTwo>
        <TestCard></TestCard>
        <TestCardThree></TestCardThree>
    </Box>
  );
}