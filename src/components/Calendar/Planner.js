import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React from 'react';
import {useState} from 'react'
import moment from 'moment'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './planner.css';

export default function Planner() {

    const [dateState, setDateState] = useState(new Date())

    //Change Date Method 
    const changeDate = (e) => {
        setDateState(e)
    }

    return (

        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '5vh'}}>
            <Calendar
            value={dateState}
            onChange={changeDate}
            />
            <Typography sx={{color: 'white', fontSize: '20px'}}>Current selected date is {moment(dateState).format('MMMM Do YYYY')}</Typography>
        </Box>
    );
  }