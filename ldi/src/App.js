import React from 'react';
import './App.css';

import Landing from './components/Landing';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  return (
      <div className="App">
        <Landing/>
        <Bio/>
        <Portfolio/>
        <Footer/>
      </div>
  );
}

export default App;