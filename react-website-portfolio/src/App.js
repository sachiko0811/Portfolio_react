import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';


function App() {
  return (
    <>
    <Router >
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>

    <Main />
    
    </>
  )
}

export default App
