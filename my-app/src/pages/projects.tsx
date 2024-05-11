import { useTranslation } from 'react-i18next';
import img from '../img/pong.webp';
import { FaArrowRightLong } from "react-icons/fa6";

function Project()
{
    const { i18n, t } = useTranslation();
    return (	
        <div className="project project_home">
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
    </div>
    )
};

export default Project;