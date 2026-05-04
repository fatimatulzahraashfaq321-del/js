
import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Alice", review: "DevValley transformed our business!" },
            { name: "Bob", review: "Exceptional service and support!" },
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded shadow">
              <p className="text-gray-400">"{testimonial.review}"</p>
              <h4 className="font-semibold mt-4">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
