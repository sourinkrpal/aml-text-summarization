// src/index.js
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

// Create a root instance
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
