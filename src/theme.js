import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Red Hat Display", "Roboto", "Arial", sans-serif', 
  },
  palette: {
    primary: {
      main: '#FF5722',
    },
    secondary: {
      main: '#673AB7',
    },
    customBlue: {
      main: '#364772',
      contrastText: '#ffffff',
    },
  },
});

export default theme;
