import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Game from './components/Game';
import LandingPage from './components/LandingPage';

import 'react-sortable-tree/style.css'
import './App.css'


export default function App() {
  return (
    <Router>
      <div className="App" style={{ height: "100vh", display: 'flex', flexDirection: 'column' }}>
        <Navbar />
      
        <Switch>
          <Route path="/play"><Game /></Route>
          <Route><LandingPage /></Route>
        </Switch>
      </div>
    </Router>
  )
}
