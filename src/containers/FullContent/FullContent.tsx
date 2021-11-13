import React, { FC, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as THREE from 'three';
import { Camera, Euler, IcosahedronGeometry, Line, LineBasicMaterial, Scene, Vector3 } from 'three';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import Robin from '../../pages/Robin/Robin';
import './FullContent.module.css';

type FullContentProps = {}


const setupThree = (posRef: React.MutableRefObject<Vector3 | null | undefined>, rotationRef: React.MutableRefObject<Euler | null | undefined>) => {
  let scene: Scene | null = new THREE.Scene();
  let camera: Camera | null = new THREE.PerspectiveCamera(
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
  let shouldAnimate = true;
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
  let icosahedron: Line<IcosahedronGeometry, LineBasicMaterial> | null = new THREE.Line(geometry, material);
  if (posRef && posRef.current && rotationRef && rotationRef.current) {
    icosahedron.setRotationFromEuler(rotationRef.current)
    icosahedron.position.add(posRef.current)
  } else {
    icosahedron.position.setX(10);
  }
  scene.add(icosahedron);

  const pointLight = new THREE.PointLight(0xffffff);
  const ambiant = new THREE.AmbientLight(0xffffff);
  pointLight.position.set(5, 5, 15);
  scene.add(pointLight, ambiant);

  function animate() {
    if(shouldAnimate) {
      requestAnimationFrame(animate);
      renderer.render(scene!, camera!);
      icosahedron!.rotation.x += 0.001;
      icosahedron!.rotation.y += 0.00005;
      icosahedron!.rotation.z += 0.001;
    }
  }

  animate();
  return () => {
    if (icosahedron) {
      posRef.current = icosahedron.position;
      rotationRef.current = icosahedron.rotation;
    }
    shouldAnimate = false;
    ambiant.dispose();
    pointLight.dispose();
    material.dispose();
    geometry.dispose();
    renderer.dispose();
    icosahedron = null;
    scene = null;
    camera = null;
  }
};

const FullContent: FC<FullContentProps> = () => {
  const navigator = useHistory();
  const bgObjectPosition: React.MutableRefObject<Vector3 | null | undefined> = useRef();
  const bgObjectRotation: React.MutableRefObject<Euler | null | undefined> = useRef();

  useEffect(() => {
    const callback = (newRoute: string): ((entries: any) => void) => {
      return (entries: any) => {
        if (navigator.location.hash !== newRoute && entries.length > 0 && entries[0].intersectionRatio >= 0.8) {
          navigator.push(newRoute);
        }
      };
    };

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const componentsIds = ['#home', '#robin', '#projects', '#contact'];
    componentsIds.forEach((it) => {
      let observer = new IntersectionObserver(callback(it), options);
      const target = document.querySelector(it);
      if (target) {
        observer.observe(target)
      }
    })
    return setupThree(bgObjectPosition, bgObjectRotation);
  });
  return <>
    <Home id={'home'}/>
    <Robin id={'robin'}/>
    <Projects id={'projects'}/>
    <Contact id={'contact'}/>
  </>;
};

export default FullContent;
