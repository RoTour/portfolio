import { FC, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import * as THREE from 'three';
import css from './Home.module.css';

type HomeProps = {
  id: string,
}

const setupThree = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerHeight / window.innerHeight,
    0.1,
    1000,
  );
  const canvas: any = document.querySelector('#bg')!!;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth * 0.95, window.innerHeight);
  camera.position.setZ(30);
  renderer.setClearColor(0xffffff, 0);
  renderer.render(scene, camera);
  const geometry = new THREE.IcosahedronGeometry(15, 0);
  const material = new THREE.LineBasicMaterial({
    color: 0x44D62C,
    opacity: 0.15,
    transparent: true,
    linewidth: 5,
  });
  // const icosahedron = new THREE.Mesh(geometry, material);
  const icosahedron = new THREE.Line(geometry, material);
  icosahedron.position.setX(10);
  scene.add(icosahedron);

  const pointLight = new THREE.PointLight(0xffffff);
  const ambiant = new THREE.AmbientLight(0xffffff);
  pointLight.position.set(5, 5, 15);
  scene.add(pointLight, ambiant);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    icosahedron.rotation.x += 0.001;
    icosahedron.rotation.y += 0.00005;
    icosahedron.rotation.z += 0.001;
  }

  animate();
};

const Home: FC<HomeProps> = (props) => {
  const navigator = useHistory();
  const nextRef = useRef(() => {});
  const firstTime = useRef(true);
  const canvas = <canvas id={'bg'} className={css.bg}/>;

  useEffect(() => {
    if (firstTime.current) {
      navigator.push('#home');
      firstTime.current = false
    }
    setupThree();
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
      <div className={css.divider}/>
      <div/>
    </div>
    <div className={css.arrowContainer} onClick={nextRef.current}>
      <IoIosArrowDown size={150} className={css.arrow}/>
    </div>
  </div>;
};

export default Home;
