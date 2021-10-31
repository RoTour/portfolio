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
        <ProjectTile name={"YPM"} desc={"Project Management Application for 800+ college students"}
                     link={"https://yprojectmanager.fr"} image={logoYnov}/>
        <ProjectTile name={"Web Crawlers"} desc={"Various web crawlers projects to automate tasks and scrap data and implementing data visualisation"}
                     link={"https://yprojectmanager.fr"} image={logoPuppeteer}/>
        <ProjectTile name={"Teaching Development"} desc={"Currently in a work-study program, I teach programming to freshmen, mainly using Javascript and Goland"}
                     link={"https://yprojectmanager.fr"} image={logoTeaching}/>
      </div>
    </div>
  </div>
  );
};

export default Projects;
