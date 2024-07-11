import { Box, Typography } from "@mui/material";
import CircleImgGreen from '../images/circleGreen.png';
import CircleImgGray from '../images/circleGray.png';
import VerticalLine from '../images/verticalLine.png';
import HorizontalLine from '../images/horizontalLine.png';
import ArrowUp from '../images/arrowUp.png';
import DateTime from "./DateTime";

function Payment() {
  return(
    <>
      <DateTime />
      
      <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: 3, zIndex: '1'}}>
          <Box sx={{display: 'flex'}}>
              <img src={CircleImgGreen} alt="Circulo verde" style={{width: '17px', height: '17px', marginTop: '3px'}}/>
              <Typography sx={{marginLeft: 1}}>1ª entrada no Pix</Typography>
          </Box>
          <Typography sx={{fontWeight: 'bolder', color: '#4D4D4D'}}>R$ 15.300,00</Typography>
      </Box>
      <Box sx={{width: '100%', marginLeft: '13px', marginTop: '-5px', zIndex: '0'}}>
          <img src={VerticalLine}/>
      </Box>
      
      <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '-9px'}}>
          <Box sx={{display: 'flex'}}>
              <img src={CircleImgGray} alt="Circulo cinza" style={{width: '17px', height: '17px', marginTop: '3px'}}/>
              <Typography sx={{marginLeft: 1}}>2ª no cartão</Typography>
          </Box>
          <Typography sx={{fontWeight: 'bolder', color: '#4D4D4D'}}>R$ 15.300,00</Typography>
      </Box>
      
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 2}}>
          <img src={HorizontalLine} alt="Linha Horzontal"  style={{width: '97%', height: '2px'}}/>
      </Box>
      
      <Box sx={{color: '#4D4D4D', display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 3}}>
          <Typography>CET: 0,5%</Typography>
          <Typography>Total: R$ 30.600,00</Typography>
      </Box>

      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 2}}>
          <img src={HorizontalLine} alt="Linha Horzontal"  style={{width: '97%', height: '2px'}}/>
      </Box>
      <Box sx={{color: '#4D4D4D', display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 3}}>
          <Typography sx={{fontWeight: 'bolder'}}>Como funciona?</Typography>
          <img src={ArrowUp} alt="Mais informações" style={{width: '13px', height: '10px', marginRight: '12px'}}/>
      </Box>

      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 2}}>
          <img src={HorizontalLine} alt="Linha Horzontal"  style={{width: '97%', height: '2px'}}/>
      </Box>

      <Box sx={{textAlign: 'center', marginTop: 3}}>
          <Typography sx={{color: '#B2B2B2'}}>Identificador: </Typography>
          <Typography sx={{color: '#4D4D4D', fontWeight: 'bolder'}}>2c1b951f356c4680b13ba1c9fc889c47</Typography>
      </Box>
    </>
  );
}

export default Payment;