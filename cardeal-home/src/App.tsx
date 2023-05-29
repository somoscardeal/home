import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Modal } from '@mui/material';
import img from './website-background.jpg';
import './fonts.css'
import HireUsButton from './components/modal/Modal';


function App() {
  const styles = {
    backgroundContainer: {
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    },

    textStyle: {
      color: 'white',
      fontSize: '4vw',
      fontWeight: 'bold',
      transform: 'translate(-50%, -50%)',
      background: '#E50000',
      width: '51.5vw',
      padding: '15px',
      textShadow: '.5px .5px 2px rgba(0, 0, 0, 0.9)',
      fontFamily: 'Fontspring-DEMO-proximanova-extrabold'
    },

    buttonStyle: {
      background: '#F8E509',
      padding: '10px',
      paddingLeft: '50px',
      paddingRight: '50px'
    },

    textContainer: {
      top: '40%',
      left: '32.5%',
    },

    buttonTextStyle: {
      fontWeight: 'bold',
      color: '#1E1E1E',
      fontFamily: 'Fontspring-DEMO-proximanova-extrabold',
      textShadow: '.5px .5px 2px rgba(200, 177, 0, 1)',
    },

    subtextStyle: {
      fontFamily: 'Fontspring-DEMO-proximanova-regular',
      width: '53.05vw',
      top: '52%',
      left: '6%',
      fontSize: '1.325vw',
      color: '#058E6E', 
      background: '#FFFFFF',
      textShadow: '.5px .1px .1px rgba(0, 0, 0, 1)',
      // border: '2px solid red'
    },
    
    lastText: {}

  };

  const currentYear = new Date().getFullYear();

  const w = window.innerWidth;
  const h = window.innerHeight;
  const isMobile = window.innerWidth <= 1000; // Define a largura de tela considerada como celular
  if (isMobile) {
    styles.textStyle.fontSize = '3.5vh'; // Define o tamanho da fonte em celulares
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box style={styles.backgroundContainer}>
      <AppBar position="static" elevation={0} style={{ backgroundColor: 'rgba(255,255,255,1)' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }} />
            <Avatar src="./cardeal_icon.ico" />
            <Box sx={{ flexGrow: 1 }} />
          </Box>
          {/* <Button style={styles.buttonStyle} onClick={handleOpen}>
            <Box style={styles.buttonTextStyle}>HIRE US</Box>
          </Button> */}
          <HireUsButton />
        </Toolbar>
      </AppBar>
      <Box style={styles.textContainer} sx={{ position: 'absolute' }}>
        <Box style={styles.textStyle} sx={{ position: 'inherit' }}>
          DEVELOPING SOLUTIONS <br />
          TO DRIVE YOUR COMPANY
        </Box>
      </Box>
      {/* <Box sx={{ position: 'absolute', }} style={ styles.subtextStyle }>
        Leveraging innovative technologies and expertise, we empower your business with tailored software solutions for digital transformation.
      </Box> */}
      
      {/* Modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-title' aria-describedby='modal-description'>
        <Box>
          <Typography id='modal-title'></Typography>
          <Typography id='modal-description'></Typography>
        </Box>
      </Modal>
      
      <Box style={styles.subtextStyle} sx={{ position: 'absolute'  }}>
      </Box>    
        <Box
          position="fixed"
          bottom={0}
          right={0}
          p={2}
          color="white"
        >
        <Typography variant="body1" fontFamily={'Fontspring-DEMO-proximanova-regular'} fontWeight='bold' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 1)',  }}>
        © Cardeal {currentYear}. All rights reserved. 
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
