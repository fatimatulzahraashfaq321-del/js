import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to DevValley</h1>
      <p className="mb-8">Your Trusted Partner in Software Development</p>
      <a href="#services" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400 transition">Get Started</a>
    </section>
  );
};

export default Hero;