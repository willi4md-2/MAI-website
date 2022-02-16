import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  return (
    
    <Box>
      <AppBar position='relative' sx={{backgroundColor: 'black'}}>
        <Toolbar>

          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flex: '1'}}>

            <Button href='/planner' size="small" sx={{textTransform: 'none', backgroundColor: 'rgb(33, 33, 33)', color: 'white', padding: '16px 24px', fontSize: '12px', fontWeight: '600'}}>Timesheet</Button>

            <Typography variant="h6" component="div" sx={{  mt: 1}}>
              <a href='/'><img src="https://www.bestpromoandapparel.com/we/we.dll/Pic?UN=109646&F=C&T=707&Age=1313639451" alt='MAI banner'></img></a>
            </Typography>

            <Button href='/inventory' size="small" sx={{textTransform: 'none', backgroundColor: 'rgb(33, 33, 33)', color: 'white', padding: '16px 24px', fontSize: '12px', fontWeight: '600'}}>Inventory</Button>

          </Box>

          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon />
          </IconButton> */}

        </Toolbar>
      </AppBar>
    </Box>
  );
}