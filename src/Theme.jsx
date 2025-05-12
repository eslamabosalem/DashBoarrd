import { createTheme } from '@mui/material';

const getTheme = () => createTheme({
  palette: {
    mode: 'dark', // مباشرة dark
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
  },
});

export default getTheme;
