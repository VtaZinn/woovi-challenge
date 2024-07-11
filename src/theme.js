import { createTheme } from '@mui/material/styles';
import '@fontsource/nunito';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif'
    ].join(','),
  },
});

export default theme;