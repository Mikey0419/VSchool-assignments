import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

function Nav() {
  return(
    <div className="navbar">
      <a
          className="navlink"
          href=" "
      >
          Learn React
      </a>
    </div>
  )
}

function Msg() {
  return(
    <div>
      <h1 className="newH1">This is JSX</h1>
      <p>This is a paragraph</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
