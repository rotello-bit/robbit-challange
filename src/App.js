import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Team from "./components/Team";
import Register from "./components/Register";
import Works from "./components/Works";

function App() {
  return (
      <div>
    <Navbar/>
    <Hero/>
    <Articles/>
    <Team/>
    <Works/>
    <Register/>
      </div>
  );
}

export default App;
