import React from 'react';
import logo from './logo.svg';
import {Poem, MessageToggle} from './Poem';
import {FetchBtn} from './Api';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.js</code> and save to reload.
          <Poem/>
          <MessageToggle/>
          <FetchBtn/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}





export default App;
