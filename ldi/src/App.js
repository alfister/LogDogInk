import React from 'react';
import './App.css';

import Landing from './Components/Landing';
import Bio from './Components/Bio';
import Portfolio from './Components/Portfolio';

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









    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
