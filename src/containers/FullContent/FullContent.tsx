import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import Robin from '../../pages/Robin/Robin';
import './FullContent.module.css';

type FullContentProps = {}

const FullContent: FC<FullContentProps> = () => {
  const navigator = useHistory();

  useEffect(() => {
    const callback = (newRoute: string): ((entries: any) => void) => {
      return (entries: any) => {
        console.log(entries, entries.length, entries[0].intersectionRatio );
        if (navigator.location.hash !== newRoute && entries.length > 0 && entries[0].intersectionRatio >= 0.8) {
          console.log(`should push ${newRoute}`);
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

    // let observer = new IntersectionObserver(callback('#robin'), options);
    // const target = document.querySelector('#robin');
    // if (target) {
    //   observer.observe(target)
    // }
    // const componentsData: { id: string, top?: number, bottom?: number }[] = [
    //   { id: 'home' },
    //   { id: 'robin' },
    //   { id: 'projects' },
    //   { id: 'contact' },
    // ];
    // componentsData.forEach((it) => {
    //   const range = document.createRange();
    //   const node = document.querySelector(`#${it.id}`);
    //   if (node) {
    //     range.selectNodeContents(node);
    //     const rects = range.getClientRects();
    //     if (rects.length > 0) {
    //       console.log(rects);
    //       it.top = rects[0].top;
    //       it.bottom = rects[0].bottom
    //     }
    //   } else {
    //     console.log(`no node ${it.id}`);
    //   }
    // })
    // const range = document.createRange();
    // const homeNode = document.querySelector('#home')!;
    // const robinNode = document.querySelector('#robin')!;
    // range.selectNodeContents(homeNode);
    // range.selectNodeContents(robinNode);
    // const rects = range.getClientRects();
    // console.log(componentsData);
    // console.log(componentsData);
  });
  return <>
    <Home id={'home'}/>
    <Robin id={'robin'}/>
    <Projects id={'projects'}/>
    <Contact id={'contact'}/>
  </>;
};

export default FullContent;
