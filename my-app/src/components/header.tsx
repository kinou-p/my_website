import MenuSimple from './language';
import MaterialUISwitch from './switch'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState, useContext } from "react";
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

    function handleChange() {
        // i18n.language
        i18n.changeLanguage(language ? 'en' : 'fr')
        setLanguage(language ? 0 : 1)
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

                <MaterialUISwitch onChange={changeMode}/>
              </div>
            </div>
        </header>
    )
}

export default Header;