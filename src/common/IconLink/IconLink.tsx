import { FC } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import css from './IconLink.module.css'

type IconLinkProps = {
  icon: IconType,
  route: string,
  css?: string,
  activeCss?: string,
  onClick: () => void
}

const IconLink: FC<IconLinkProps> = (props) => {
  const Icon = props.icon;
  return <NavLink to={props.route} activeClassName={props.activeCss} exact={true}>
    <Icon className={`${props.css} ${css.color}`} onClick={props.onClick}/>
  </NavLink>;
};

export default IconLink;
