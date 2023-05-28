import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';
import img from './website-background.jpg';
import './fonts.css'

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
      fontSize: '3.9vw',
      fontWeight: 'bold',
      top: '50%',
      left: '35%',
      transform: 'translate(-50%, -50%)',
      background: '#E50000',
      width: 'fit-content',
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

    buttonTextStyle: {
      fontWeight: 'bold',
      color: '#1E1E1E',
      fontFamily: 'Fontspring-DEMO-proximanova-extrabold',
      textShadow: '.5px .5px 2px rgba(200, 177, 0, 1)',
    },
  };

  const currentYear = new Date().getFullYear();

  const w = window.innerWidth;
  const h = window.innerHeight;
  const isMobile = window.innerWidth <= 1000; // Define a largura de tela considerada como celular
  if (isMobile) {
    styles.textStyle.fontSize = '3.5vh'; // Define o tamanho da fonte em celulares
  }

  return (
    <Box style={styles.backgroundContainer}>
      <AppBar position="static" elevation={0} style={{ backgroundColor: 'rgba(255,255,255,1)' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }} />
            <Avatar src="./cardeal_icon.ico" />
            <Box sx={{ flexGrow: 1 }} />
          </Box>
          <Button style={styles.buttonStyle}>
            <Box style={styles.buttonTextStyle}>HIRE US</Box>
          </Button>
        </Toolbar>
      </AppBar>
        <Box style={styles.textStyle} sx={{ position: 'absolute' }}>
          DEVELOPING SOLUTIONS <br />
          TO DRIVE YOUR COMPANY
        </Box>
        <Box
          position="fixed"
          bottom={0}
          right={0}
          p={2}
          color="white"
        >
      <Typography variant="body1" fontFamily={'Fontspring-DEMO-proximanova-extrabold'} fontWeight='bold' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 1)' }}>
      © Cardeal {currentYear}. All rights reserved. 
      </Typography>
    </Box>
    </Box>
  );
}

export default App;
