import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

import Mainpage from '../../pages/mainpage'
import MyPage from '../../pages/Settings/Settings'
import Loginpage from '../../pages/Login'
import System from '../../pages/System/System'

export class App extends Component {
  render() {
    return (
      <Router className="body">
        <Switch>
          <Route exact path="/" component={Loginpage}/>
          <Route exact path="/home" component={Mainpage}/>
          <Route exact path="/my-page" component={MyPage}/>
          <Route exact path="/settings" component={System}/>
          <Route exact path="/notifications" component={System}/>
        </Switch>
      </Router>
    )
  }
}

export default App
