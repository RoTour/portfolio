import { FC } from 'react';
import { IconType } from 'react-icons';
// import { NavLink } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import css from './IconLink.module.css';

type IconLinkProps = {
  icon: IconType,
  route: string,
  hoverStr?: string,
  css?: string,
  activeCss?: string,
  onClick: () => void
}

const IconLink: FC<IconLinkProps> = (props) => {
  const Icon = props.icon;

  return <NavLink to={props.route} activeClassName={props.activeCss} exact={true}
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
    <Icon className={`${props.css} ${css.color}`} onClick={props.onClick}/>
    <div className={css.infobox}>{props.hoverStr ?? '🛠️ TestFromProps'}</div>
  </NavLink>;
};

export default IconLink;
