import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: { main: '#1976d2' },
    background: { default: mode === 'light' ? '#f9f9f9' : '#121212' },
  },
});