import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { RootRouter } from './components/rootRouter/RootRouter';
import { NAV_ITEMS, SECONDARY_NAV_ITEMS } from './constants';

export type ChangeMe = any;

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar navItems={NAV_ITEMS} secondaryNavItems={SECONDARY_NAV_ITEMS} />
        <RootRouter />
      </Router>
    </div>
  );
}

export default App;
