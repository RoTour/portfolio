import { FC } from 'react';
import {
  AiFillProject,
  DiScrum,
  FaAngular,
  FaDatabase,
  FaNodeJs,
  FaReact,
  SiExpress,
  SiTypescript,
} from 'react-icons/all';
import css from './Skills.module.css'

type SkillsProps = {}

const Skills: FC<SkillsProps> = () => {
  return <div className={css.skillsGrid}>
    <a target={'_blank'} rel={'noreferrer'} href={'https://reactjs.org/'} className={css.skill}>
      <FaReact />
      <div className={css.infobox}>{'React'}</div>
    </a>
    <div/>
    <a target={'_blank'} rel={'noreferrer'} href={'https://angular.io/'} className={css.skill}>
      <FaAngular />
      <div className={css.infobox}>{'Angular'}</div>
    </a>
    <div/>
    <a target={'_blank'} rel={'noreferrer'} href={'https://nodejs.org/en/about/'} className={css.skill}>
      <FaNodeJs />
      <div className={css.infobox}>{'Nodejs'}</div>
    </a>
    <a target={'_blank'} rel={'noreferrer'} href={'https://www.typescriptlang.org/'} className={css.skill}>
      <SiTypescript />
      <div className={css.infobox}>{'Typescript'}</div>
    </a>
    <a target={'_blank'} rel={'noreferrer'} href={'https://expressjs.com/'} className={css.skill}>
      <SiExpress />
      <div className={css.infobox}>{'Express'}</div>
    </a>
    <a target={'_blank'} rel={'noreferrer'} href={'https://en.wikipedia.org/wiki/SQL'} className={css.skill}>
      <FaDatabase />
      <div className={css.infobox}>{'SQL (mysql, postgre, sqlite'}</div>
    </a>
    <div/>
    <a target={'_blank'} rel={'noreferrer'} href={'https://github.com/rotour'} className={css.skill}>
      <AiFillProject />
      <div className={css.infobox}>{'Project Management'}</div>
    </a>
    <div/>
    <a target={'_blank'} rel={'noreferrer'} href={'https://agilemanifesto.org/'} className={css.skill}>
      <DiScrum />
      <div className={css.infobox}>{'Agility (SCRUM)'}</div>
    </a>
  </div>;
};

export default Skills;
