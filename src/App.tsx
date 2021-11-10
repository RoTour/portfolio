import React from 'react';
import { BsCodeSlash, GoMail, ImHome, ImUser } from 'react-icons/all';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar, { NavBarItem } from './common/NavBar/NavBar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects';
import Robin from './pages/Robin/Robin';

function App() {
  const navBarStyle = 'navbar';

  const navBarItems: NavBarItem[] = [
    { icon: ImHome, route: '/', infoText: '🏠️ Home'},
    { icon: ImUser, route: '/robin', infoText: '🎓 About Me'},
    { icon: BsCodeSlash, route: '/projects', infoText: '💼 Projects'},
    // { icon: BsStar, route: '/experience', infoText: '⭐️Bonus Section'},
    { icon: GoMail, route: '/contact', infoText: '📨️ Contact Me'},
  ]

  return <Router>
    <div className={'siteContainer'}>
      <NavBar css={navBarStyle} items={navBarItems}/>
      <div id={'content'}>
        <Switch>
          <Route path={'/'} render={() => <Home/>} exact/>
          <Route path={"/robin"} render={() => <Robin/>} exact />
          <Route path={"/projects"} render={() => <Projects/>} exact />
          <Route path={"/contact"} render={() => <Contact/>} exact />
        </Switch>
      </div>
    </div>
  </Router>;
}

export default App;
