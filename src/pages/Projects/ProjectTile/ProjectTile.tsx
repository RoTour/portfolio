import { FC } from 'react';
import css from './ProjectTIle.module.css'

type ProjectTileProps = {
  name: string,
  desc?: string,
  link: string,
  image: string,
}

const ProjectTile: FC<ProjectTileProps> = (props) => {
  return <a className={css.unstyledLink} href={'https://github.com/rotour'} target={'_blank'} rel={'noreferrer'}>
    <div className={css.projectContainer}>
      <img className={css.img} src={props.image} alt={'Project'}/>
      <p className={css.projectTileText}>{props.children}</p>
    </div>
  </a>;
};

export default ProjectTile;
