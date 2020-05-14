import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from './components/Game';
import LandingPage from './components/LandingPage';

import 'react-sortable-tree/style.css'
import './App.css'


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/play"><Game /></Route>
        <Route><LandingPage /></Route>
      </Switch>
    </Router>
  )
}
