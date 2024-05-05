import Header from '../components/header'
import ButtonSimple from '../components/button'

import { FaArrowRightLong } from "react-icons/fa6";

function Home()
{
    return(
      <div>
        <body>
          {/* <Header/> */}
          <div className='home'>
            <div className="presentation">
                <div className='hello'>Bienvenue.</div>
                <div className="description">Étudiant a 42 en informatique, je cherche un emploi afin de compléter 
                  ma formation académique par une expérience professionnelle qui a du sens. 
                  Je suis ouvert à de nombreuses propositions en rapport avec mes études 
                  et suis prêt à discuter de mon parcours plus amplement lors d’un entretien.</div>
                <div className="cv_button">
                  <ButtonSimple/>
                </div>
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
    )
}

export default Home;