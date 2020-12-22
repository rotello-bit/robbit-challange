import React from 'react'
import  { useState, useContext } from 'react';

const Navbar = () => {
const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <a href="#" className="toggle-button" onClick={()=> setIsNavbarOpen (!isNavbarOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
        <nav className="navbar container">
          <div className="brand-title"><img src="/img/logo.png" alt="aa"/></div>


          <div className={`${isNavbarOpen ? 'navbar-items active' : 'navbar-items'}`}>
            <div className="navbar-links">
              <ul>
                <li><a href="#">Why Robit?</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Explore</a></li>
              </ul>
            </div>
            <div className="navbar-buttons">
              <input type="text" placeholder="search"/>
                <button className="btn-light">Sign in</button>
                <button className="btn-primary">Sign up</button>
            </div>
          </div>
        </nav>

      </header>
    </div>
  )
}

export default Navbar