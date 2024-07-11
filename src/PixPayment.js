import QrCode from './components/QrCode.js';
import Payment from './components/Payment.js';
import Header from './components/Header.js';
import Box from '@mui/material/Box';
import Footer from './components/Footer.js';



function PixPayment(){
  return(
    <>
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Header title="João, pague a entrada de R$ 15.300,00 pelo Pix" />
        <QrCode />
        <Payment/>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 5, paddingBottom: 3}}>
          <Footer/>
      </Box>
    </>
  );
}

export default PixPayment;