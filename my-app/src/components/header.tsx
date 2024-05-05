import MenuSimple from './language';
import MaterialUISwitch from './switch'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState, useContext } from "react";

import logo from '../img/first.jpg';

// import { ColorModeContext } from '../utils/color-toggle'

// const theme = useTheme()
// const colorMode = React.useContext(ColorModeContext);

import { ColorModeContext } from '../utils/color-toggle';

// const { ColorMode, setColorMode } = useColorMode();


function Header()
{
    
    const { changeMode } = useContext(ColorModeContext);
    // const { colorMode, setColorMode } = changeMode();

    // const toggleColorMode = () => {
    //     // Call setColorMode and pass the new color mode value
    //     setColorMode(colorMode === 'light' ? 'dark' : 'light');
    // };

    return (
        // <ThemeProvider theme={darkTheme}>
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
                <MaterialUISwitch onChange={changeMode}/>
                {/* <Switch className="dark_mode" checked={toggleDarkMode} onChange={toggleDarkTheme} defaultChecked /> */}
              </div>
            </div>
        </header>
        // </ThemeProvider>
    )
}

export default Header;