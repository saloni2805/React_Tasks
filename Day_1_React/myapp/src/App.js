import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          {/* 
          
          19.0.0
          Major.Minor.Patch

          ~ - most recent patch version

          minor- functionality update
          @-specific version

          
          */}
        </a>
      </header>
    </div>
  );
}

export default App;
