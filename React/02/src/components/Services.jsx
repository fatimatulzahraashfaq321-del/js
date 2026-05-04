import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Web Development", "Mobile App Development", "UI/UX Design"].map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-400">High-quality {service.toLowerCase()} tailored for your needs.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services