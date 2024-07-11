import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Radius from '../images/radius.png';
import Chip from '@mui/material/Chip';
import Flag from '../images/flag.png'
import Correct from '../images/correct.png';
import Loading from './Loading';
import { useState } from 'react';

function CardPrice(props) {
  const [open, setOpen] = useState(false);

  const border = '1' === props.selected ? {border: '2px solid #03D69D'} : {border: '1.3px solid #E5E5E5'};
  const radius = '1' === props.selected ? Correct : Radius;

  function handleClick() {
    props.onClick();
    setOpen(true);
  }

  return(
    <>
    <Chip label="Pix" sx={{width: 60, height: 25, position: 'absolute', marginTop: '27px', marginLeft: 2, backgroundColor: '#E5E5E5', fontWeight: 'bolder', fontSize: 15}}/>
    <Card onClick={handleClick} sx={{marginTop: 5, width: '100%', border}}>
      <CardActionArea>
        <CardContent>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography sx={{fontWeight: 'bolder', color: '#4D4D4D'}}>1X</Typography>
                <Typography sx={{marginLeft: 1, fontSize: 18}}>R$30.500,00</Typography>
              </Box>
              <Box sx={{display: 'flex'}}>
                <Typography sx={{color: '#03D69D'}}>Ganhe</Typography>
                <Typography sx={{color: '#03D69D', fontWeight: 'bolder', marginLeft: 0.5}}> 3% </Typography>
                <Typography sx={{color: '#03D69D', marginLeft: 0.5}}>de Cashback</Typography>
              </Box>
            </Box>
            <Box>
              <img src={radius} alt="Seleção do card"/>
            </Box>
          </Box>
          <Box sx={{backgroundImage: `url(${Flag})`, backgroundPosition: 'center' , width: '100%', height: 30,  backgroundSize: '100%', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', marginTop: 1}}>
              <Typography sx={{color: 'white', marginLeft: 1}}>🤑</Typography>
              <Typography sx={{fontWeight: 'bolder', color: 'white', marginLeft: 1, fontSize: '14px'}}>R$ 300,00</Typography>
              <Typography sx={{color: 'white', marginLeft: 1 , fontSize: '14px'}}>de volta no seu Pix na hora</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    <Loading isOpen={open} nextWindow='/pix-payment'/>
    </>
  );
}

export default CardPrice;