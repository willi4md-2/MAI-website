import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import Slide from '@mui/material/Slide';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
// import AddToCartButton from './AddToCart';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
// import './SelectOptions.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OptionsMenu() {

  const [size, setSize] = React.useState('');
  const [color, setColor] = React.useState('');
  const [logo, setLogo] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const [counter, setCounter] = React.useState(0);

  const incrementCounter = () => setCounter(counter + 1);

  const decrementCounter = () => setCounter(counter - 1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button id='chooseOptionsButton' size="small" sx={{textTransform: 'none', backgroundColor: '#1f1f1f', color: 'white', padding: '6px 12px', fontSize: '12px', fontWeight: '500', }} onClick={handleClickOpen}>
        Choose Options
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: 'white', boxShadow: 'none' }}>
          <Toolbar>
            <Typography marginTop='10px' variant='h6' fontWeight="500" component="div" textAlign="left" color='rgb(51, 51, 51)' marginRight='auto'>Marine Corp Martial Arts Cotton Crewneck Sweatshirt<br></br>Gildan™ 100% Cotton</Typography>
            <IconButton
              edge="end"
              onClick={handleClose}
              aria-label="close"
              sx={{marginTop: '15px', marginRight: '10px', padding: '0', position: 'absolute', top: '0', right: '0'}}
            >
              <CancelTwoToneIcon sx={{color: 'rgb(55, 55, 55)'}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Typography marginTop='5px' marginBottom='5px' marginLeft='25px' component="div" variant="h6" fontWeight="600" textAlign="left" fontSize="20px" color='rgb(51, 51, 51)'>$15.99</Typography>

        <Divider sx={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}></Divider>

        <Box sx={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <Button onClick={incrementCounter} sx={{border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>Increment Counter</Button>
            <Typography fontWeight={600} fontSize={'20px'} textAlign={"center"} marginTop={"20px"}>Size</Typography>
            <Button onClick={decrementCounter} sx={{border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>Decrement Counter</Button>
        </Box>

        {/* Sizing Box */}
        <Box>
          <Typography fontWeight={600} fontSize={'20px'} textAlign={"center"} marginTop={"20px"}>Size</Typography>
          <List sx={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <ListItem button onClick={() => setSize('S')} sx={{border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>
              S
            </ListItem>
            <ListItem button onClick={() => setSize('M')} sx={{border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>
              M
            </ListItem>
            <ListItem button onClick={() => setSize('L')} sx={{border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>
              L
            </ListItem>
            <ListItem button onClick={() => setSize('XL')} sx={{border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>
              XL
            </ListItem>
            <ListItem button onClick={() => setSize('XL')} sx={{border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>
              XXL
            </ListItem>
            <p>{size}</p>
          </List>
        </Box>

        <Typography fontWeight={600} fontSize={'20px'} textAlign={"center"} marginTop={"20px"}>Quantity & Color</Typography>

        {/* Coloring Box */}
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
          <Box sx={{marginRight: '15px', flexGrow: '1', marginTop: '20px'}}>
            <FormControl sx={{minWidth: '100px'}}>
              <InputLabel id="demo-simple-select-label" sx={{fontWeight: '600',}}>Quantity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quantity}
                label="Quantity"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
            </Box>

          <List sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '20px'}}>
            <ListItem button onClick={() => setColor('Black')} sx={{width: '24px', height: '24px', borderRadius:'48px', backgroundColor: 'black', margin: '5px', padding: '0'}}></ListItem>
            <ListItem button onClick={() => setColor('Military Green')} sx={{width: '24px', height: '24px', borderRadius:'48px', backgroundColor: '#4b5320', margin: '5px', padding: '0'}}></ListItem>
            <p>{color}</p>
          </List>

        </Box>

        {/* Logo Choosing Box */}
        <Box>
          <Typography fontWeight={600} fontSize={'20px'} textAlign={"center"} marginTop={"20px"}>Choose Your Logo</Typography>
          <List sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: '75px'}}>
            <ListItem button onClick={() => setLogo('MAI')} sx={{fontWeight: '600', border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>
              MAI
            </ListItem>
            <ListItem button onClick={() => setLogo('MAI')} sx={{fontWeight: '600', border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>
              MAIT
            </ListItem>
            <ListItem button onClick={() => setLogo('FFI')} sx={{fontWeight: '600', border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>
              FFI
            </ListItem>
            <ListItem button onClick={() => setLogo('FFIT')} sx={{fontWeight: '600', border: '1px solid #dcdcdc', borderRadius: '4px', margin: '5px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>
              FFIT
            </ListItem>
            <p>{logo}</p>
          </List>
        </Box>

        {/* <AddToCartButton></AddToCartButton> */}
        <Button onClick={handleClose} sx={{color: 'black', fontWeight: '600', textTransform: 'none', position: 'absolute', bottom: '0', left: '0', marginLeft: '20px', marginBottom: '15px', border: '1px solid rgb(51, 51, 51)', borderRadius: '4px', width: 'auto', textAlign: 'center', paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px'}}>Back to Inventory</Button>
        <ArrowLeftIcon onClick={handleClose} sx={{marginBottom: '27px', marginLeft: '20px', position: 'absolute', bottom: '0', left: '0', cursor: 'pointer'}}></ArrowLeftIcon>
      </Dialog>
    </div>
  );
}