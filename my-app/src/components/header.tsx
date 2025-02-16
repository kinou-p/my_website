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
    const [checked, setChecked] = useState(localStorage.getItem('mode') === 'light' ? false : true);

    useEffect(() => {
        i18n.changeLanguage(language); // Apply saved language
        localStorage.setItem('language', language); // Persist on reload
    }, [language, i18n]); // Re-run effect if language changes

    useEffect(() => {
        if (localStorage.getItem('mode') === 'light') {
            changeMode();
            setChecked(false);
        }
    }, [changeMode]);

    function handleLanguageChange(event: SelectChangeEvent) {
        const newLang = event.target.value;
        setLanguage(newLang); // Update state
    }

    function handleModeToggle() {
        const newMode = checked ? 'dark' : 'light';
        localStorage.setItem('mode', newMode);
        changeMode();
        setChecked(!checked);
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
                    <MaterialUISwitch checked={checked} onChange={handleModeToggle} />
                </div>
            </div>
        </header>
    );
}

export default Header;
