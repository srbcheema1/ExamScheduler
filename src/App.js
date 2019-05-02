import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home.js'
import About from './pages/About.js'
import Help from './pages/Help.js'
import Navbar from './components/navbar/Navbar.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <div>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/About" component = {About}/>
          <Route exact path = "/Help" component = {Help}/>
        </div>
      </Router>
    );
  }
}

export default App;
