// theme.js
import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: 'light', // Switch to 'dark' for dark mode
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(45deg, #f8f9fa 0%, #e9ecef 100%)'
        }
      }
    }
  }
});
