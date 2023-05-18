import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import RegistrationForm from './components/pages/RegistrationForm';
import LoginForm from './components/pages/LoginForm';

import { CartProvider } from 'react-use-cart'

function App() {
  return (
    <>
    <CartProvider>
    <Router>
      < Navbar />
    <Routes>
      {/* old ver of Switch */}
        <Route path="/" exact Component={Home}/>
        <Route path='/shop' exact Component={Shop} />
        <Route path='/about' exact Component={About} />
        <Route path='/contact' exact Component={Contact} />
        <Route path='/registration-form' exact Component={RegistrationForm} />
        <Route path='/login-form' exact Component={LoginForm} />
      </Routes>
    </Router>
    </CartProvider>
    </>
  );
}

export default App;
