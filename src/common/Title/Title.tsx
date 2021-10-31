import { FC } from 'react';
import './Title.module.css'

type TitleProps = {}

const Title: FC<TitleProps> = (props) => {
  return <h2>{props.children}</h2>;
};

export default Title;
