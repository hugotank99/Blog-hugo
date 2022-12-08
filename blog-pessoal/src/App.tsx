import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';
import Home from './pages/home/Home';
import Footer from './componetes/estaticos/footer/Footer';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './componetes/estaticos/navBar/NavBar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Home/>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
