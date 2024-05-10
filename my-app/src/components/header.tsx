import MenuSimple from './language';
import MaterialUISwitch from './switch'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState, useContext} from "react";
import { useEffect } from "react";
import logo from '../img/first.jpg';

import { ColorModeContext } from '../utils/color-toggle';
import { useTranslation } from 'react-i18next';

import ReactCountryFlag from "react-country-flag"
import { FormControl } from 'react-bootstrap';
import { Box, InputLabel, MenuItem} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Header()
{
    const { i18n, t } = useTranslation();
    const { changeMode } = useContext(ColorModeContext);
    const [language, setLanguage] = useState(1);
    const [mode, setMode] = useState("dark");
    // const [checked, setChecked] = useState(1);
    const [checked, setChecked] = React.useState(true);

    useEffect(() => {
      if (!localStorage.getItem('language'))
        localStorage.setItem('language', 'en');
      else
      {
        let current = localStorage.getItem('language')
        if (current == 'en')
        {
          setLanguage(current ? 0 : 1)
          i18n.changeLanguage(current)
        }
      }

      if (!localStorage.getItem('mode'))
        localStorage.setItem('mode', 'dark');
      else
      {
        let current = localStorage.getItem('mode')
        if (current == "light")
        {
          changeMode()
          setChecked(false)
        }
      }


    }, []);

    function handleChange() {
        i18n.changeLanguage(language ? 'en' : 'fr')
        localStorage.setItem('language', language ? 'en' : 'fr');
        setLanguage(language ? 0 : 1)
    }

    function handleMode() {
        let current = localStorage.getItem('mode')
        localStorage.setItem('mode', current == 'light' ? 'dark' : 'light');
        changeMode()
        setChecked(checked ? false : true)
    }

    return (
        <header>
            <div  className="header-content">
              <a className="logo" href="/">
                <img src={logo} alt="Logo" />
              </a>
              <div className="pages">
                <a href="/contact">{t("page1")}</a>
              </div>
              <div className="pages">
                <a href="/projects">{t("page2")}</a>
              </div>
              <div className="pages">
                <a href="/resume">{t("page3")}</a>
              </div>
              <div className="pages">
                <a href="/skills">{t("page4")}</a>
              </div>
              <div className="language">
                {/* <MenuSimple/> */}
                <Box sx={{ minWidth: 120 }}>
                {/* <FormControl > */}
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    // label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}><ReactCountryFlag countryCode="GB" svg/></MenuItem>
                    <MenuItem value={1}><ReactCountryFlag countryCode="FR" svg/></MenuItem>
                  </Select>
                {/* </FormControl> */}
                </Box>

                <MaterialUISwitch checked={checked} onChange={handleMode}/>
              </div>
            </div>
        </header>
    )
}

export default Header;

// function useEffect(arg0: () => void, arg1: number[]) {
//   throw new Error('Function not implemented.');
// }
