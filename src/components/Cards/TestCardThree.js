import * as React from 'react';
import './TestCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TestCardTwo() {
  return (
    <Card sx={{ maxWidth: 320, borderRadius: "0",  borderTop: '1px solid #dcdcdc', borderLeft: 'none', borderRight: 'none',  padding: '20px', boxShadow: 'none'  }}>
      <CardMedia
        component="img"
        height="345"
        image="https://target.scene7.com/is/image/Target/GUEST_bddf3aa7-5ebc-43d1-95e6-683fb0c0eb46?fmt=webp&wid=1400&qlt=80"
        alt="test"
      />
      <CardContent sx={{paddingBottom: 0}}>
        <Typography variant='h6' fontWeight="bold" component="div" textAlign="left" color='rgb(51, 51, 51)'>
          Marine Corp Martial Arts Long Sleeve Cotton T-Shirt<br></br>Gildan™ 100% Cotton
        </Typography>
        <Typography variant="h6" fontWeight="1" textAlign="left" fontSize="16px" color='rgb(51, 51, 51)'>
          $13.99
        </Typography>
      </CardContent>
      <CardActions sx={{paddingLeft: '16px'}}>
        <Button size="small" sx={{textTransform: 'none', backgroundColor: 'rgb(51, 51, 51)', color: 'white', padding: '6px 12px', fontSize: '12px', fontWeight: '600'}}>Choose Options</Button>
        <ul className='colorChangers'>
          <li id='colorChangerOne'></li>
          <li id='colorChangerTwo'></li>
        </ul>
      </CardActions>
    </Card>
  );
}