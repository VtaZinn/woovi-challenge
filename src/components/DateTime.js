import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';


function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  return(
    <>
      <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: 3}}>
        <Typography sx={{color: '#B2B2B2'}}>Prazo de pagamento:</Typography>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography  sx={{fontWeight: 'bolder', color: '#4D4D4D'}}> {formattedDate}</Typography>
          <Typography sx={{marginLeft: 1}}>-</Typography>
          <Typography  sx={{fontWeight: 'bolder', color: '#4D4D4D', marginLeft: 1}}> {formattedTime}</Typography>
        </Box>
       
      </Box>
    </>
  );

}

export default DateTime;