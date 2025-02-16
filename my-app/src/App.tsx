
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

import Ft_transcendence from './pages/projects/ft_transcendence'
import Nas from './pages/projects/nas'
import Minishell from './pages/projects/minishell'
import Cloud_1 from './pages/projects/cloud_1'
import Cube3d from './pages/projects/cube3d'




import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header';
import { ColorModeContext } from './utils/color-toggle';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n'; // Assuming you have a separate i18n config file

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
    <div>
    <I18nextProvider i18n={i18n}>
    <Header/>
    <BrowserRouter>
    <CssBaseline />
    {/* <Router> */}
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/projects/nas" element={<Nas/>}/>
        <Route path="/projects/ft_transcendence" element={<Ft_transcendence/>}/>

        <Route path="/projects/cloud_1" element={<Cloud_1/>}/>
        <Route path="/projects/minishell" element={<Minishell/>}/>
        <Route path="/projects/cube3d" element={<Cube3d/>}/>



        {/* <Route path="/resume" element={<Resume/>}/> */}
        <Route path="/skills" element={<Skills/>}/>
    </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </I18nextProvider>
    </div>
    // </React.StrictMode>
  );
}

export default App;
