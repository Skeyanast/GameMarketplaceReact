import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';

import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;