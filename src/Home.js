import CardPrice from './components/CardPrice.js';
import CardPriceInstalments from './components/CardPriceInstalments.js';
import data from './data.js';
import Header from './components/Header.js';
import Box from '@mui/material/Box';
import Footer from './components/Footer.js';
import { useState } from 'react';



function Home(){
  const [status, setStatus] = useState('2');
  console.log(status)
  return(
    <>
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Header title="João, como você quer pagar?" />
      <Box sx={{width: '90%'}}>
        <CardPrice onClick={()=>setStatus('1')} selected={status}/>
        <Box sx={{marginTop: 7}}>
            {data.map(item => <CardPriceInstalments key={item.id} item={item} onClick={()=>setStatus(item.id)} selected={status}/>)}
        </Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 5, paddingBottom: 3}}>
        <Footer/>
      </Box>
    </Box>
  </>
  );
}

export default Home;