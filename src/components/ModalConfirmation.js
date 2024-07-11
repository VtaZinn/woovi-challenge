import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Logo from './Logo';


function ModalConfirmation(props){
  return(
    <>
      <Box >
      <Modal
        open={props.isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{maxWidth: '400px', margin: 'auto'}}
      >
        <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box sx={{width: '80%',height: 'auto' ,backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom: 3}}>
            <Logo />
            <Typography sx={{color: '#4D4D4D', fontWeight: 'bolder'}}> Pagamento realizado com sucesso!</Typography>
            <Box sx={{marginTop: 3}}>
              <Button sx={{backgroundColor: '#03D69D', color: 'white', fontWeight: 'bold', width: '100%'}} onClick={()=>window.location.assign('/')}>Voltar a primeira pagina.</Button>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: 5, alignItems: 'center'}}>
              <Typography sx={{color: '#4D4D4D', fontWeight: 'bolder'}}> Desenvolvido por Victor Augusto</Typography>
              <a href="https://www.linkedin.com/in/victor-augusto-010156297/" target="_blank" rel="noopener noreferrer">
                <Button sx={{color: '#03D69D', fontWeight: 'bold', width: '100%'}}>Linkedin</Button>
              </a>
              <a href="https://github.com/VtaZinn" target="_blank" rel="noopener noreferrer" >
                <Button sx={{color: '#03D69D', fontWeight: 'bold', marginTop: 0.5, width: '100%'}}>GitHub</Button>
              </a>
              <a href="https://vta-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" >
                <Button sx={{color: '#03D69D', fontWeight: 'bold', marginTop: 0.5, width: '100%'}}>Portfólio</Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
    </>
  );
}

export default ModalConfirmation;