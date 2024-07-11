import LogoImage from "../images/Logo.png";
import Box from '@mui/material/Box';

function Logo() {
  return(
    <>
      <Box sx={{mt: 5}}>
          <img src={LogoImage} alt="Logo Woovi"/>
      </Box>
    </>
  );
}

export default Logo;