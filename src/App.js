import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
