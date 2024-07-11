import { Box } from '@mui/material';
import QrCodeImg from '../images/qr.png';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useState } from 'react';
import Loading from './Loading';

function QrCode(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }


  return(
    <>
      <Box sx={{border: '2px solid #03D69D', borderRadius: '10px', marginTop: 3, overflow: 'hidden'}}>
          <img src={QrCodeImg} alt="Qr Code"/>
      </Box>
      <Box sx={{marginTop: 3}}>
        <Button variant="contained" endIcon={<FileCopyIcon />} sx={{backgroundColor: '#133A6F', width: "330px"}} onClick={handleClick}>
          Clique para copiar QR CODE
        </Button>
      </Box>
      <Loading isOpen={open} nextWindow='/card-payment'/>
    </>
  );
}

export default QrCode;