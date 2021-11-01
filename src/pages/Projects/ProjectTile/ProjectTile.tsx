import { FC } from 'react';
import css from './ProjectTIle.module.css'

type ProjectTileProps = {
  name: string,
  desc?: string,
  link: string,
  image: string,
}

const ProjectTile: FC<ProjectTileProps> = (props) => {
  return <div className={css.projectContainer}>
    <img className={css.img} src={props.image} alt={'Project'}/>
    <p className={css.projectTileText}>{props.children}</p>
  </div>;
};

export default ProjectTile;
