import React from 'react';
import { BsCodeSlash, GoMail, ImHome, ImUser } from 'react-icons/all';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar, { NavBarItem } from './common/NavBar/NavBar';
import FullContent from './containers/FullContent/FullContent';

function App() {
  const navBarStyle = 'navbar';

  const navBarItems: NavBarItem[] = [
    { icon: ImHome, route: '#home', infoText: '🏠️ Home'},
    { icon: ImUser, route: '#robin', infoText: '🎓 About Me'},
    { icon: BsCodeSlash, route: '#projects', infoText: '💼 Projects'},
    { icon: GoMail, route: '#contact', infoText: '📨️ Contact Me'},
  ]

  return <HashRouter >
    <div className={'siteContainer'}>
      <NavBar css={navBarStyle} items={navBarItems}/>
      <div id={'content'}>
        <Switch>
          <Route path={'/'} render={() => <FullContent/>}/>
          {/*<Route path={'/'} render={() => <Home/>} exact/>*/}
          {/*<Route path={"/robin"} render={() => <Robin/>} exact />*/}
          {/*<Route path={"/projects"} render={() => <Projects/>} exact />*/}
          {/*<Route path={"/contact"} render={() => <Contact/>} exact />*/}
        </Switch>
      </div>
    </div>
  </HashRouter>;
}

export default App;
