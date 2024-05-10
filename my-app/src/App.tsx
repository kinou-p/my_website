
import './css/App.css';
import './css/mine.css';
import './css/project.css';
import './css/mine_phone.css';
import './css/contact.css';

import Home from './pages/home'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Resume from './pages/resume'
import Skills from './pages/skills'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header';
import { ColorModeContext } from './utils/color-toggle';
import { useTranslation } from 'react-i18next';

import "./utils/i18n";
import Project from './pages/projects';

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
    // <React.StrictMode>
    <BrowserRouter>
    <CssBaseline />
    {/* <Router> */}
    <Header/> 
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/skills" element={<Skills/>}/>
    </Routes>
    {/* </Router> */}
    </BrowserRouter>
    // </React.StrictMode>
  );
}

export default App;
