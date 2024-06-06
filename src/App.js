// src/App.js
import React from 'react';
import './App.css';
import { CssBaseline, Container, Typography,createTheme, ThemeProvider } from '@mui/material';
import Search from './components/Search';

const theme = createTheme({
  palette: {
    background: {
      default: '#FFF7ED', // Dark blue background color
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <header>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Recipe Wonder
        </Typography>
      </header>
      
      <Search />
   
    </Container>
    </ThemeProvider>
  );
};

export default App;
