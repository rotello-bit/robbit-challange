import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Team from "./components/Team";
import Register from "./components/Register";
import Works from "./components/Works";
import Footer from "./components/footer";

function App() {
  return (
      <div>
    <Navbar/>
    <Hero/>
    <Articles/>
    <Team/>
    <Works/>
    <Register/>
    <Footer/>
      </div>
  );
}

export default App;
