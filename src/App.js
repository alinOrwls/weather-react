import logo from './logo.svg';
import React from "react";
import axios from 'axios';
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       <h1>hello world!!</h1>
       <Weather city="Mexico" />
        
      </header>
    </div>
  );
}

export default App;
