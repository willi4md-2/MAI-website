import * as React from 'react';
import './TestCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import testImage from '../../images/testImg.jpg';
// import Box from '@mui/material/Box';
import OptionsMenu from '../OptionsMenu/OptionsMenu';

export default function TestCard() {
  return (
    <Card sx={{ maxWidth: 320, borderRadius: "0", borderTop: '1px solid #dcdcdc', borderLeft: 'none', borderRight: 'none',  padding: '20px', boxShadow: 'none' }}>
      <CardMedia
        component="img"
        height="345"
        image={testImage}
        alt="test"
      />
      <CardContent sx={{paddingBottom: 0}}>
        <Typography variant='h6' fontWeight="bold" component="div" textAlign="left" color='rgb(51, 51, 51)'>
          18500<br></br>Cotton Sweatshirt
        </Typography>

      </CardContent>
      <CardActions sx={{paddingLeft: '16px'}}>
        <OptionsMenu></OptionsMenu>
        {/* <ul className='colorChangers'>
          <li id='colorChangerOne'></li>
          <li id='colorChangerTwo'></li>
        </ul> */}
      </CardActions>
    </Card>
  );
}