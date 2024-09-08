// src/App.js
import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import { Table } from './components/Table/Table';
import img from './assets/st.png';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <div>
        <div className="background-overlay" />

        <img className="st" src={ img } alt="" />
        <Table />
      </div>
    </PlanetProvider>
  );
}

export default App;
