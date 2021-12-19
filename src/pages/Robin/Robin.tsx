import { FC } from 'react';
import Title from '../../common/Title/Title';
import css from './Robin.module.css';
import Skills from './Skills/Skills';


type RobinProps = {
  id: string
}

const Robin: FC<RobinProps> = (props) => {
  return <div className={css.centerContainer} id={props.id}>
    <div className={css.twoColSeparatedContainer}>
      <div className={css.leftCol}>
        <h2 className={css.title}>Who am I ?</h2>
        <div>
          <p> - I'm a French 20 years old student learning <strong>Web Development</strong></p>
          <p> - I'm passionated about all kind of <strong>new technologies</strong></p>
          <p> - I work as a part-time <strong>Freelance Web Developer </strong>
            to gain experience in this <strong><br/>constantly expanding field</strong>
          </p>
        </div>
      </div>
      <div className={css.divider}/>
      <div className={css.rightCol}>
        <Title>My main skills :</Title>
        <Skills/>
      </div>
    </div>
  </div>
};

export default Robin;
