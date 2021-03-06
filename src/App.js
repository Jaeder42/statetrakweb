import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Home } from './views/home';
import { Match } from './views/match';
import { Profile } from './views/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/profile/:id"> <Profile /></Route>
        <Route path="/match/:shareCode" > <Match /> </Route>
        <Route path="/" exact >
          <Home />
        </Route>
      </Router>
    </div >
  );
}

export default App;
