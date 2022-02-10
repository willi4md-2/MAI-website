import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchBar from "material-ui-search-bar";
// import Logo from '../../images/CoStoreLogo.png'
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   abRoot: {
//     backgroundColor: "red"
//   }
// })
// );

export default function Navbar() {

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{backgroundColor: 'black', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt: 1}}>
            <img src="https://www.promoplace.com/ws/ws.dll/CoStoreLogo?UN=109646&Type=L&Store=11667&Age=1386893529&MaxW=800&MaxH=75" alt='MAI banner'></img>
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          {/* <SearchBar
          /> */}
          <div>
          {/* <SearchBar sx={{height: 'auto', width: 'auto'}}></SearchBar> */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}