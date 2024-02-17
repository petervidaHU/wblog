import { createTheme } from '@mui/material/styles';

export const commonS = {
  margins: {
    huge: '6rem',
    large: '3rem',
    medium: '1.5rem',
    small: '1rem',
    tiny: '0.5rem',
  },
  sizes: {
    huge: '6rem',
    large: '3rem',
    medium: '1.5rem',
    default: '1rem',
    small: '0.75rem',
    tiny: '0.5rem',
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff4081',
      light: '#ff79b0',
      dark: '#c60055',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      marginTop: commonS.margins.huge,
      marginBottom: commonS.margins.small,
      fontFamily: 'inter, sans-serif',
      fontSize: commonS.sizes.huge,
      fontWeight: 300,
    },
    h2: {
      fontFamily: 'inter, sans-serif',
      fontSize: '2rem',
      fontWeight: 300,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 300,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 15,
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Override button text transformation
        },
      },
    },
  },
});
