import './style/App.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import '@fontsource/nunito';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import PixPayment from './pages/PixPayment.js';
import CardPayment from './pages/CardPayment.js';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pix-payment" element={<PixPayment />} />
            <Route path="/card-payment" element={<CardPayment />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
