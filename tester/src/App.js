import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './Card';


function App() {

  return (
    <div className="App">
      <header className="App-header" style={{transformStyle: "preserve-3d"}}>
        <Card />
      </header>
    </div>
  );
}

export default App;
