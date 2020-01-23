import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Home } from './views/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact >
          <Home />
        </Route>
      </Router>
    </div >
  );
}

export default App;
