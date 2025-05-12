import Header from '../components/header'
import ButtonSimple from '../components/button'

import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

import React, { useEffect } from 'react';

function Home()
{
    const { i18n, t } = useTranslation();

    useEffect(() => {
      i18n.changeLanguage(i18n.language);
  }, [i18n.language]);

    return(
      <div>
          {/* <Header/> */}
          <div className='home'>
            <div className="presentation">
                <div className='hello'>{t("welcome")}</div>
                {/* <div className="description">Étudiant a 42 en informatique, je cherche un emploi afin de compléter 
                  ma formation académique par une expérience professionnelle qui a du sens. 
                  Je suis ouvert à de nombreuses propositions en rapport avec mes études 
                  et suis prêt à discuter de mon parcours plus amplement lors d’un entretien.</div> */}
                  <div className= "description">{t("description")}</div>
            </div>
            <div className="project">
                <div className='project_txt'>{t("project")}</div>
                <div className = "project_group">
                  <a href="/projects/nas" className="project_list">- Homemade NAS</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <a href="/projects/ft_transcendence" className="project_list">- Ft_Transcendence</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <a href="/projects/cloud_1" className="project_list">- Cloud-1</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <a href="/projects/minishell" className="project_list">- Minishell</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <a href="/projects/cube3d" className="project_list">- Cube3d</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
            </div>
          </div>
      </div>
    )
}

export default Home;