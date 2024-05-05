import React, { createContext, useContext, useState } from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import Header from '../components/header';
import App from "../App"


export const ColorModeContext = createContext<any>(true);

export const ColorModeProvider = ({ children }: any) => {
    
    const [ColorMode, setColorMode] = useState(true); // Define your initial state here
    const darkTheme = createTheme({
      palette: {
        mode: ColorMode ? 'dark' : 'light',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#131052',
        },
      },
    });
    
    function changeMode() {
        console.log("CHANGE MOOOOODE")
        setColorMode(!ColorMode)
    }

    return (
        <ThemeProvider theme={darkTheme}>        
        <ColorModeContext.Provider value={{ ColorMode, changeMode }}>
            <App/>
        </ColorModeContext.Provider>
        </ThemeProvider>

    );
};
