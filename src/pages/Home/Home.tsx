import { FC, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import css from './Home.module.css';

type HomeProps = {
  id: string,
}

const Home: FC<HomeProps> = (props) => {
  const navigator = useHistory();
  const nextRef = useRef(() => {});
  const firstTime = useRef(true);
  const canvas = <canvas id={'bg'} className={css.bg}/>;

  useEffect(() => {
    if (firstTime.current && window.innerWidth > 600) {
      if (navigator.location.hash === '') {
        navigator.push('#home');
        console.log("keep pushing");
      }
      firstTime.current = false
    } else {
      console.log("stop pushing");
    }
    nextRef.current = () => {
      document.querySelector('#robin')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navigator.push('#robin');
    };
  });


  return <div className={css.home} id={props.id}>
    {canvas}
    <div className={css.titleContainer}>
      <div>
        <p className={css.preTitle}>Hi, I am</p>
        <h1 className={css.title}>ROBIN TOURNE</h1>
        <h2 className={css.subTitle}>STUDENT <strong>&&</strong><br/> FREELANCE WEB DEVELOPER</h2>
      </div>
      <div/>
    </div>
    <div className={css.arrowContainer} onClick={nextRef.current}>
      <IoIosArrowDown size={150} className={css.arrow}/>
    </div>
  </div>;
};

export default Home;
