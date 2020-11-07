import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

import Mainpage from '../../pages/mainpage'
import Profile from '../../pages/settings'
import Settings from '../../pages/settings'
import Loginpage from '../../pages/Login'

export class App extends Component {
  render() {
    return (
      <Router className="body">
        <Switch>
          <Route exact path="/" component={Loginpage}/>
          <Route exact path="/home" component={Mainpage}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/settings" component={Settings}/>
        </Switch>
      </Router>
    )
  }
}

export default App
