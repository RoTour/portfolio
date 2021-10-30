import React from 'react';
import { BsCodeSlash, BsStar, GoMail, ImHome, ImUser } from 'react-icons/all';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar, { NavBarItem } from './common/NavBar/NavBar';
import Home from './page/Home/Home'

function App() {
  const navBarStyle = 'navbar';

  const navBarItems: NavBarItem[] = [
    { icon: ImHome, route: '/'},
    { icon: ImUser, route: '/Robin'},
    { icon: BsCodeSlash, route: '/projects'},
    { icon: BsStar, route: '/experience'},
    { icon: GoMail, route: '/contact'},
  ]

  return <Router>
    <div className={'siteContainer'}>
      <NavBar css={navBarStyle} items={navBarItems}/>
      <div id={'content'}>
        <Switch>
          <Route path={'/'} render={() => <Home/>} exact/>
          <Route path={"/Robin"} exact>
            <h1>Hello i'm Robin</h1>
          </Route>
        </Switch>
      </div>
    </div>
  </Router>;
}

export default App;
