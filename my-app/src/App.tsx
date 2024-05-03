
// import React from 'react';
import logo from './img/first.jpg';
import background from "./img/background.jpg";
// import background_dark from "./img/background_dark.jpg";
import './css/App.css';
import './css/mine.css';

import MenuSimple from './components/language';
import UnstyledButtonsSimple from './components/button'

import { Card, CardContent, CardMedia, Switch, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { dark } from '@mui/material/styles/createPalette';
// import { Switch } from '@mui/base/Switch';
import React, { useState } from "react";

import { FaArrowRightLong } from "react-icons/fa6";

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


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <body>
          <header>
              <div className="header-content">
                {/* <h1 className="title">A.P</h1> */}
                <div className="logo">
                  <img src={logo} alt="Logo" />
                </div>
                <div className="language">
                  <MenuSimple/> 
                  <Switch className="dark_mode" checked={toggleDarkMode} onChange={toggleDarkTheme} defaultChecked />
                </div>
              </div>
          </header>
          <div className='home'>
            <div className="presentation">
                <div className='hello'>Bienvenue.</div>
                <p className="description">Étudiant a 42 en informatique, je cherche un emploi afin de compléter 
                  ma formation académique par une expérience professionnelle qui a du sens. 
                  Je suis ouvert à de nombreuses propositions en rapport avec mes études 
                  et suis prêt à discuter de mon parcours plus amplement lors d’un entretien.</p>
                <div className="cv_button">
                  <UnstyledButtonsSimple/>
                </div>
                {/* <div className="project_button"> */}
                  {/* <UnstyledButtonsSimple/> */}
                {/* </div> */}
            </div>
            <div className="project">
                <div className='project_txt'>Projects</div>
                <div className = "project_group">
                  <p className="project_list">- ft_transcendence</p>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <p className="project_list">- cloud-1</p>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <p className="project_list">- minishell</p>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <p className="project_list">- cube3d</p>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <p className="project_list">- Homemade NAS</p>
                  <FaArrowRightLong className="arrow"/>
                </div>

            </div>
          </div>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
