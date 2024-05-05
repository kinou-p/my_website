
import './css/App.css';
import './css/mine.css';
import './css/mine_phone.css';

import Home from './pages/home'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header';
import { ColorModeContext } from './utils/color-toggle';
import { useTranslation } from 'react-i18next';

import "./utils/i18n";

function App()
{
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    console.log("changed");
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',
      },
    },
  });

  const { i18n, t } = useTranslation();
  // const location = useLocation();
  
  return (
    <React.StrictMode>
    <BrowserRouter>
    <CssBaseline />
    {/* <Router> */}
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<></>}/>
    </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
