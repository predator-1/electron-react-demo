import React from 'react';
import logo from './logo.svg';
import './App.css';
const electron = require('electron');
const fs = require('fs');
const remote  = electron.remote;
const files = fs.readdirSync(remote.app.getAppPath());
console.log(files);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!!
          {remote.app.getAppPath()}
        </p>
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
