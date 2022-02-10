import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import './Navbar.css';

export default function NewsletterNavbar() {

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='newsletterBox' position='static' style={{boxShadow: 'none', alignItems: 'center'}}>
        <Toolbar>
            <Box className='newsletterFields'>
                <div>
                <TextField sx={{margin: '10px'}} id="outlined-basic" label="First Name" variant="filled" 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                        ),
                    }}
                />
                <TextField sx={{margin: '10px'}} id="outlined-basic" label="Last Name" variant="filled" 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                        ),
                    }}    
                />
                </div>
                <TextField sx={{margin: '10px', flexGrow: 1}}  id="outlined-basic" label="Phone #" variant="filled" />
                <TextField sx={{margin: '10px'}}  id="outlined-basic" label="Email" variant="filled" />
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}