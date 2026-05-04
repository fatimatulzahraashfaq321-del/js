
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
