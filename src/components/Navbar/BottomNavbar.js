import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography';
import './Navbar.css';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MenuIcon from '@mui/icons-material/Menu';

export default function BottomNavbar() {

  return (
    
    <Box className='bottomNavbar' sx={{ flexGrow: 1, height: 'auto', }}>
      <AppBar position='static' style={{backgroundImage: 'radial-gradient( circle 674px at 18.3% 77%,  rgb(51, 51, 51) 3.4%, rgb(82,81,82) 56.6% )'}}>
        <Toolbar>

            <Box className='socialMedias' sx={{display: 'flex', justifyContent: 'flex-start', flexGrow: 1, alignItems: 'center'}}>
              <a href='https://www.facebook.com/bestpromoproducts/'><FacebookIcon sx={{marginRight: '15px', fontSize: '2em'}}></FacebookIcon></a>
              <a href='https://www.facebook.com/bestpromoproducts/'><TwitterIcon sx={{marginRight: '15px', fontSize: '2em'}}></TwitterIcon></a>
              <a href='https://www.facebook.com/bestpromoproducts/'><InstagramIcon sx={{marginRight: '15px', fontSize: '2em'}}></InstagramIcon></a>
              <div id='testing'>
                <img id='swam' src='https://www.bestpromoandapparel.com/files/swam-logo-illustrator-vector-1.png' alt='swam certification'></img>
                <img id='collegiate' src='https://www.bestpromoandapparel.com/files/officially-licensed-collegiate.jpg' alt='cert'></img>
              </div>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-end', flexDirection: 'column', marginRight: '15px'}}>
            <Typography fontWeight={600} color={'#068ACF'}>17063 Merchants Dr. Ruther Glen, VA 22546-5805</Typography>
            <Typography fontWeight={600} color={'#068ACF'}>804.589.1909 · 804-347-7142</Typography>
            <Typography fontWeight={600} color={'#068ACF'}>michelle@bestpromoandapparel.com</Typography>
            </Box>
            
            <a href='https://www.bestpromoandapparel.com/'>
              <img src='https://www.bestpromoandapparel.com/we/we.dll/Pic?UN=109646&F=C&T=707&Age=1313639451' alt='Best Promotional Products and Apparel Logo'></img>
            </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}