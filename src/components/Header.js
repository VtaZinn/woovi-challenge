import { Typography } from "@mui/material";
import Logo from "./Logo";
import Box from '@mui/material/Box';

function Header(props) {
  return(
    <>
      <Logo />
      <Box>
        <Typography variant="h3" sx={{fontSize: 24, fontWeight: 'bolder', color: '#4D4D4D', mt: 2, textAlign: 'center'}}>{props.title}</Typography>
      </Box>
    </>
  );
}

export default Header;