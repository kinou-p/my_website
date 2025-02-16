import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { ColorModeContext } from '../utils/color-toggle';
import ReactCountryFlag from "react-country-flag";
import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import MaterialUISwitch from './switch';
import logo from '../img/logo.png';

function Header() {
    const { i18n, t } = useTranslation();
    const { changeMode } = useContext(ColorModeContext);
    
    // Read language from localStorage or default to 'en'
    const storedLanguage = localStorage.getItem('language') || 'en';

    const [language, setLanguage] = useState(storedLanguage);
    const [mode, setMode] = useState("dark");
    const [checked, setChecked] = React.useState(true);

    useEffect(() => {
        i18n.changeLanguage(language); // Apply saved language
        localStorage.setItem('language', language); // Persist on reload
    }, [language, i18n]); // Re-run effect if language changes

    useEffect(() => {
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

    function handleLanguageChange(event: SelectChangeEvent) {
        const newLang = event.target.value;
        setLanguage(newLang); // Update state
    }

    function handleMode() {
        let current = localStorage.getItem('mode')
        localStorage.setItem('mode', current == 'light' ? 'dark' : 'light');
        changeMode()
        setChecked(checked ? false : true)
    }

    return (
        <header>
            <div className="header-content">
                <a className="logo" href="/">
                    <img src={logo} alt="Logo" />
                </a>

                <div className="menu">
                    <div className="pages">
                        <a href="/projects">{t("page2")}</a>
                    </div>
                    <div className="pages">
                        <a href="/skills">{t("page4")}</a>
                    </div>
                    <div className="pages">
                        <a href="/contact">{t("page1")}</a>
                    </div>
                </div>

                <div className="language">
                    <Box sx={{ minWidth: 120 }}>
                        <Select
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <MenuItem value="en">
                                <ReactCountryFlag countryCode="GB" svg />
                            </MenuItem>
                            <MenuItem value="fr">
                                <ReactCountryFlag countryCode="FR" svg />
                            </MenuItem>
                        </Select>
                    </Box>
                    <MaterialUISwitch checked={checked} onChange={handleMode} />
                </div>
            </div>
        </header>
    );
}

export default Header;
