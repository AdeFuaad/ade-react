import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>John Doe</h1>
      <nav>
        <ul>
          <li><NavLink exact activeClassName="active" to="/">About Me</NavLink></li>
          <li><NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
          <li><NavLink activeClassName="active" to="/resume">Resume</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
