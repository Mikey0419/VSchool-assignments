import React from 'react';
import reactLogo from './react-logo.webp';

function Header() {
    return (
      <div className="header-nav">
        <img src={reactLogo} className="reactLogo" onClick={() => alert('clicked!')} alt="logo" />
        <p className="logo-text">ReactFacts</p>
        <p className="subtitle">React Course - Project 1</p>
      </div>
    )
}

export default Header;