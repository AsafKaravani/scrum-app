// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createTheme, ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#EDCDBB',
    },
    secondary: {
      main: '#f50057',
    },
  },
  shadows: Array(25).fill('none'),
  typography: {
    button: { textTransform: 'none' },
  },
};

export const theme = createTheme(themeOptions);
