import logo from './logo.svg';
import './App.css';
import { Surface } from '@sun-ui/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Surface sx={{color: 'red', '&:hover':{color: '#000'}}} elevation={5}>
          Ciao come stai??
        </Surface>
      </header>
    </div>
  );
}

export default App;
