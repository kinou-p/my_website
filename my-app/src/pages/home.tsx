import Header from '../components/header'
import ButtonSimple from '../components/button'

import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

function Home()
{

    const { i18n, t } = useTranslation();

    return(
      <div>
        <body>
          {/* <Header/> */}
          <div className='home'>
            <div className="presentation">
                <div className='hello'>{t("welcome")}</div>
                {/* <div className="description">Étudiant a 42 en informatique, je cherche un emploi afin de compléter 
                  ma formation académique par une expérience professionnelle qui a du sens. 
                  Je suis ouvert à de nombreuses propositions en rapport avec mes études 
                  et suis prêt à discuter de mon parcours plus amplement lors d’un entretien.</div> */}
                  <div className= "description">{t("description")}</div>
                <div className= "cv_button">
                  <ButtonSimple/>
                </div>
            </div>
            <div className="project">
                <div className='project_txt'>{t("project")}</div>
                <div className = "project_group">
                  <a href="/projects" className="project_list">- Ft_Transcendence</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <a href="/projects" className="project_list">- Cloud-1</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <a href="/projects" className="project_list">- Minishell</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <a href="/projects" className="project_list">- Cube3d</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
                <div className = "project_group">
                  <a href="/projects" className="project_list">- Homemade NAS</a>
                  <FaArrowRightLong className="arrow"/>
                </div>
            </div>
          </div>
        </body>
      </div>
    )
}

export default Home;