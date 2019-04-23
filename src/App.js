import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home.js'
import About from './pages/About.js'
import Navbar from './components/Navbar.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <div>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/About" component = {About}/>
        </div>
      </Router>
    );
  }
}

export default App;
