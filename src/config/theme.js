import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary : {
      main: '#147CFC',
      light: '#1367C6',
      dark: '#43A4FD',
      darkest: '#1A237E',
      contrastText: '#fff',
    },
    secondary : {
      main: '#FF6F00',
      light: '#FF6F00',
      dark: '#FF6F00',
      contrastText: '#fff',
    },
    black: '#000000',
    white: '#ffffff',
    grey: '#D4D4D4',
    light_grey: '#F5F5F5',
  },
});