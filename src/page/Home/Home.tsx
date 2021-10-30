import { FC } from 'react';
import { IoIosArrowDown } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import css from './Home.module.css'

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  const navigator = useHistory();

  const next = () => {
    navigator.push('/Robin')
  }

  return <div className={css.home}>
    <div className={css.titleContainer}>
      <h1 className={css.title}>ROBIN TOURNE</h1>
      <div className={css.divider}/>
      <h2 className={css.subTitle}>STUDENT & FREELANCE WEB DEVELOPER</h2>
    </div>
    <div className={css.arrowContainer} onClick={next}>
      <IoIosArrowDown size={150} className={css.arrow}/>
    </div>
  </div>;
};

export default Home;
