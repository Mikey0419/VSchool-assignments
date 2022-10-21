import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// declarative
/* function Navbar() {
    return(
        <div className="navbar">
            <a className="navlink" href="">Navbar Logo</a>
        </div>
    )
}

function H1element() {
    return(
        <h1 className="newH1">Hello!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <H1element />
    </div>, document.getElementById("root")); */

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

/* const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(page); */

ReactDOM.render(page, document.getElementById("root"));

/* // imperative (step by step instruction)
const root = document.getElementById("root");
const element = document.createElement("h1");
element.className = "newH1";
element.textContent = "This was added via append()";
root.appendChild(element); */