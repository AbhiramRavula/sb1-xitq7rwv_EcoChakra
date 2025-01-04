import React from 'react';

export default function Quote() {
  return (
    <div className="bg-green-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure className="relative">
          <div className="absolute -top-12 -left-4 text-green-700 text-8xl font-serif">"</div>
          <blockquote className="relative text-center">
            <p className="text-3xl md:text-4xl font-light text-white italic">
              Healthy soil is brown gold - the foundation of life and prosperity in agriculture.
            </p>
            <figcaption className="mt-6">
              <div className="text-lg font-medium text-green-200">EcoChakra Philosophy</div>
            </figcaption>
          </blockquote>
          <div className="absolute -bottom-16 -right-4 text-green-700 text-8xl font-serif rotate-180">"</div>
        </figure>
      </div>
    </div>
  );
}