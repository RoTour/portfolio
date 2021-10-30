import { FC } from 'react';
import css from './Robin.module.css';


type RobinProps = {}

const Robin: FC<RobinProps> = () => {
  return <div className={css.twoColSeparatedContainer}>
    <div className={css.leftCol}>
      <h2 className={css.title}>Who am I ?</h2>
      <div>
        <p> - I'm a French 20 years old student learning <strong>Web Development</strong></p>
        <p> - I'm passionated about all kind of <strong>new technologies</strong></p>
        <p> - I work as a part-time <strong>Freelance Web Developer </strong>
          to gain experience in the domain <strong><br/>I love</strong>
        </p>
      </div>
      <div/>
    </div>
    <div className={css.divider}/>
    <div className={css.rightCol}>
      <h2 className={css.title}>My main skills :</h2>
    </div>
  </div>;
};

export default Robin;
