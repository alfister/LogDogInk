import React from 'react';
import './App.css';

import Landing from './components/Landing';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';


function App() {
  return (
      <div className="App">
        <Landing/>
        <Bio/>
        <Portfolio/>
      </div>
  );
}

export default App;