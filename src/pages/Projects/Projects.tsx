import { FC } from 'react';
import css from './Projects.module.css'
import ProjectTile from './ProjectTile/ProjectTile';
import logoYnov from '../../assets/ynov_blanc.jpg'
import logoPuppeteer from '../../assets/puppeteer.png'
import logoTeaching from '../../assets/college.png'
import Title from '../../common/Title/Title';

type ProjectsProps = {}

const Projects: FC<ProjectsProps> = () => {
  return (
  <div className={css.centerContainer}>
    <div className={css.small}>
      <Title>My recent projects</Title>
      <div className={css.projectListContainer}>
        <ProjectTile name={"YPM"} link={"https://yprojectmanager.fr"} image={logoYnov}>
          Project management Web Application (<strong>Backend</strong> + <strong>Frontend</strong>) used by <strong>800+ college students</strong>
        </ProjectTile>
        <ProjectTile name={"Web Crawlers"} link={"https://yprojectmanager.fr"} image={logoPuppeteer}>
          Various <strong>web crawlers</strong> projects to automate tasks and scrap data
        </ProjectTile>
        <ProjectTile name={"Teaching Development"} link={"https://yprojectmanager.fr"} image={logoTeaching}>
          Currently in a work-study program, <strong>I teach programming</strong> to freshmen, mainly using Javascript and Golang
        </ProjectTile>
      </div>
    </div>
  </div>
  );
};

export default Projects;
