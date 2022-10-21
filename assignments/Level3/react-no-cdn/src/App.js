import reactLogo from './react-logo.webp'
import './App.css';
import "inter-ui/inter.css";

/* function App() {
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
        </a>
      </header>
    </div>
  );
} */

function App() {
  return(
      <div>
          <div className="header-nav">
            <img src={reactLogo} className="reactLogo" onClick={() => alert('clicked!')} alt="logo" /><p className="logo-text">ReactFacts</p>
          </div>
          <h1>Fun facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of smartphone apps, including mobile apps</li>
          </ul>
      </div>
  )
}

export default App;
