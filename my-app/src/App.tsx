
// import React from 'react';
import logo from './img/first.jpg';
import background from "./img/background.jpg";
// import background_dark from "./img/background_dark.jpg";
import './css/App.css';
import './css/mine.css';
import './css/mine_phone.css';

import MenuSimple from './components/language';
import ButtonSimple from './components/button'
import MaterialUISwitch from './components/switch'

import { Card, CardContent, CardMedia, Switch, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { dark } from '@mui/material/styles/createPalette';
// import { Switch } from '@mui/base/Switch';
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Button from '@mui/material/Button';

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

                <div className="pages">
                  Contact
                </div>
                <div className="pages">
                  Projets
                </div>
                <div className="pages">
                  CV
                </div>
                <div className="pages">
                  Competences
                </div>


                <div className="language">
                  <MenuSimple/>
                  <MaterialUISwitch onChange={toggleDarkTheme}/>
                  {/* <Switch className="dark_mode" checked={toggleDarkMode} onChange={toggleDarkTheme} defaultChecked /> */}
                </div>
              </div>
          </header>
          <div className='home'>
            <div className="presentation">
                <div className='hello'>Bienvenue.</div>
                <div className="description">Étudiant a 42 en informatique, je cherche un emploi afin de compléter 
                  ma formation académique par une expérience professionnelle qui a du sens. 
                  Je suis ouvert à de nombreuses propositions en rapport avec mes études 
                  et suis prêt à discuter de mon parcours plus amplement lors d’un entretien.</div>
                <div className="cv_button">
                  {/* <UnstyledButtonsSimple/> */}
                  <ButtonSimple/>
                </div>
                {/* <div className="project_button"> */}
                  {/* <UnstyledButtonsSimple/> */}
                {/* </div> */}
            </div>
            <div className="project">
                <div className='project_txt'>Projects</div>
                <div className = "project_group">
                  <p className="project_list">- Ft_Transcendence</p>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <p className="project_list">- Cloud-1</p>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <p className="project_list">- Minishell</p>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <p className="project_list">- Cube3d</p>
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
