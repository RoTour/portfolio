import { FC } from 'react';
import { IconType } from 'react-icons';
import IconLink from '../IconLink/IconLink';
import css from './NavBar.module.css';

type NavBarProps = {
  css?: string,
  items?: NavBarItem[]
}

export type NavBarItem = {
  icon: IconType,
  route: string,
  infoText?: string,
}

const NavBar: FC<NavBarProps> = (props) => {
  return <>
    <div className={props.css}>
      <span>
        {props.items?.map(
          ({ icon, route, infoText }, index) => {
            return <IconLink
              key={index}
              icon={icon}
              route={route}
              css={css.icon}
              activeCss={css.active}
              onClick={() => {}}
              hoverStr={infoText}
            />;
          },
        )}
      </span>
    </div>
  </>;
};

export default NavBar;
