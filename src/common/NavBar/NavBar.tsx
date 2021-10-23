import { FC } from 'react';
import css from './NavBar.module.css'

type NavBarProps = {}

const NavBar: FC<NavBarProps> = () => {
  return <>
    <div className={css.navbar}>
      <a href="#">Hello</a>
      <a href="#">Hello</a>
      <a href="#">Hello</a>
    </div>
  </>;
};

export default NavBar;
