import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SelectedProductCompare } from './components/selectedProductCompare/SelectedProductCompare';

export type ChangeMe = any;

function App() {
  return (
    <div className="App">
      <SelectedProductCompare />
    </div>
  );
}

export default App;
