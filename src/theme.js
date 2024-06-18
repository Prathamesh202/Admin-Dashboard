// src/theme.js
import { createTheme } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    secondary: grey,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: grey,
    secondary: blue,
  },
});
