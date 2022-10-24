import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reactLogo from './react-logo.webp';
import watermark from './reactjs-icon 2.png';
import App from './App';
//import reportWebVitals from './reportWebVitals';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

/* function Nav() {
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
} */

function Header() {
  return (
    <div className="header-nav">
      <img src={reactLogo} className="reactLogo" onClick={() => alert('clicked!')} alt="logo" />
      <p className="logo-text">ReactFacts</p>
      <p className="subtitle">React Course - Project 1</p>
    </div>
  )
}

function Watermark() {
  return (
    <div className="watermark">
      <img src={watermark} alt="watermark" />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Header />
    <Watermark />
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
