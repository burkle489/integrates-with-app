import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SelectedProductCompare } from './components/selectedProductCompare/SelectedProductCompare';
import { NavBar } from './components/navBar/NavBar';
import { NAV_ITEMS, SECONDARY_NAV_ITEMS } from './constants';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootRouter } from './components/rootRouter/RootRouter';

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
