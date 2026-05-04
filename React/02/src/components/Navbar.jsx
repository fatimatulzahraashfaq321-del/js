
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <div className="text-2xl font-bold">DevValley</div>
      <ul className="flex space-x-4">
        <li><a href="#hero" className="hover:text-gray-500">Home</a></li>
        <li><a href="#services" className="hover:text-gray-500">Services</a></li>
        <li><a href="#about" className="hover:text-gray-500">About</a></li>
        <li><a href="#testimonials" className="hover:text-gray-500">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
