import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
