import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Radius from '../images/radius.png';
import Chip from '@mui/material/Chip';
import Flag from '../images/flag.png';
import Card from '@mui/material/Card';
import Correct from '../images/correct.png';
import Loading from './Loading';
import { useState } from 'react';

function CardPriceInstalments(props) {
  const [open, setOpen] = useState(false);

  const item = props.item;

  const border = item.id === props.selected ? {border: '2px solid #03D69D'} : {border: '1.3px solid #E5E5E5'};
  const radius = item.id === props.selected ? Correct : Radius;

  function handleClick() {
    props.onClick();
    setOpen(true);
  }


  return(
      <>
      {item.id==='2' && <Chip label="Pix Parcelado" sx={{width: 120, height: 25, position: 'absolute', marginTop: '-15px', marginLeft: 2, backgroundColor: '#E5E5E5', fontWeight: 'bolder', fontSize: 15}}/>}
      <Card sx={border} onClick={handleClick}>
        <CardActionArea>
          <CardContent>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Box>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{fontWeight: 'bolder', color: '#4D4D4D'}}>{item.instalments}</Typography>
                  <Typography sx={{marginLeft: 1, fontSize: 18}}>{item.price}</Typography>
                </Box>
                <Box sx={{display: 'flex'}}>
                  <Typography sx={{color: '#AFAFAF'}}>Total: {item.total}</Typography>
                </Box>
              </Box>
              <Box>
                <img src={radius} alt="Seleção do card"/>
              </Box>
            </Box>
            {item.flag === 'Fees' &&<Box sx={{backgroundImage: `url(${Flag})`, backgroundPosition: 'center' , width: '100%', height: 30,  backgroundSize: '100%', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', marginTop: 1}}>
                <Typography sx={{fontWeight: 'bolder', color: 'white', marginLeft: 1, fontSize: '13px'}}>-3% de juros: </Typography>
                <Typography sx={{color: 'white', marginLeft: 0.5, fontSize: '13px'}}>Melhor opção de parcelamento</Typography>
            </Box>}
          </CardContent>
        </CardActionArea>
      </Card>
      <Loading isOpen={open} nextWindow='/pix-payment'/>
      </>
  );
}

export default CardPriceInstalments;