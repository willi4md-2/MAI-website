// import logo from '../../images/logo.svg';
import './/App.css';
import Navbar from '../Navbar/Navbar';
import TestCard from '../Cards/TestCard';
import TestCardTwo from '../Cards/TestCardTwo';
import TestCardThree from '../Cards/TestCardThree';
import React from 'react';
import BottomNavbar from '../Navbar/BottomNavbar';
import NewsletterNavbar from '../Navbar/NewsletterNavbar';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Box className='cardContainer'>

        <div className='testCards'>
          <TestCard></TestCard>
          <TestCardTwo></TestCardTwo>
          <TestCardThree></TestCardThree>
        </div>

        <div className='testCards'>
          <TestCard></TestCard>
          <TestCardTwo></TestCardTwo>
          <TestCardThree></TestCardThree>
        </div>

        <div className='testCards'>
          <TestCard></TestCard>
          <TestCardTwo></TestCardTwo>
          <TestCardThree></TestCardThree>
        </div>

        <div className='testCards'>
          <TestCard></TestCard>
          <TestCardTwo></TestCardTwo>
          <TestCardThree></TestCardThree>
        </div>

        <div className='testCards'>
          <TestCard></TestCard>
          <TestCardTwo></TestCardTwo>
          <TestCardThree></TestCardThree>
        </div>

      </Box>
      <NewsletterNavbar></NewsletterNavbar>
      <BottomNavbar></BottomNavbar>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

    </div>
  );
}

export default App;
