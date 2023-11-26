import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Surface, Fade } from '@sun-ui/react'

/*
  sx={
      {
        padding: "32px",
        backgroundColor: "hotpink",
        fontSize: "24px",
        borderRadius: "4px",
        color: "black",
        fontWeight: "bold",
        "&:hover": {
          color: "white",
        }
      }
    }
*/

function App() {
  const [active, setActive] = React.useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={{marginBottom: '30px'}} onClick={() => setActive(!active)}>Animation: {active.toString()}</button>

        <Fade in={active} timeout={200}>
          <Surface elevation={5}>1</Surface>
        </Fade>

        <Fade in={active} timeout={300}>
          <Surface elevation={5}>2</Surface>
        </Fade>

        <Fade in={active} timeout={400}>
          <Surface elevation={5}>3</Surface>
        </Fade>

      </header>
    </div>
  );
}

export default App;
