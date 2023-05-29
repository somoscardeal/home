import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Icon } from '@mui/material';
import IconZap from './whatsapp.png';
import Link from '@mui/material/Link';
import IconCal from './cal-com_icon.png';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // 
    // boxShadow: 24,
    p: 4,
};


const styles = {
    buttonStyle: {
        background: '#F8E509',
        padding: '10px',
        paddingLeft: '50px',
        paddingRight: '50px',
    },
    buttonTextStyle: {
        fontWeight: 'bold',
        color: '#1E1E1E',
        fontFamily: 'Fontspring-DEMO-proximanova-extrabold',
        textShadow: '.5px .5px 2px rgba(200, 177, 0, 1)',
    }, 
    modalStyle: {
        background: '#D9D9D9',
        width: '24.270509831235vw',
        height: '15vw'
    }
}


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button onClick={handleOpen} style={styles.buttonStyle}>
            <Box style={styles.buttonTextStyle}>
                HIRE US
            </Box>
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={styles.modalStyle}>
            <Box id='modal-modal-description' fontFamily={'Fontspring-DEMO-proximanova-extrabold'}>
                Schedule a meeting with Cal.com:<Link href='https://cal.com/cardeal/15min' target='_blank'><Avatar src={IconCal} sx={{ width: 58, height: 58 }} variant='rounded' /></Link>
                <br />
                Talk via Whatsapp: <Link href='https://wa.me/5581983375088?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento+para...' target='_blank'><Avatar src={IconZap} sx={{ width: 56, height: 56 }} variant='rounded'/></Link>
                <br />
                Mail us via:  <Link href='mailto:somoscardeal@proton.me' target='_blank'><Typography>somoscardeal@proton.me</Typography></Link> 
                <br />
                Phone: <Link href='tel:+5581983375088'><Typography>+5581983375088</Typography></Link>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}