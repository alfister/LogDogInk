import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Landing from './components/Landing';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {

    AOS.init({
        offset: 0,
        delay: 200,
        duration: 1300,
        startEvent: 'load'
    });

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