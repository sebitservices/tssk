import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App; 