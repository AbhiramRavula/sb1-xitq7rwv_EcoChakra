import React, { useState } from 'react';
import { Leaf, Recycle, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import FarmerRegistration from './auth/FarmerRegistration';

export default function Hero() {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="relative bg-green-800 text-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80"
          alt="Farm field background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Transform Farm Waste into
            <span className="block text-green-400">Sustainable Value</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-200 mb-12">
            Join our circular economy platform that converts agricultural waste into organic manure,
            benefiting farmers, the environment, and future generations.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowRegistration(true)}
              className="bg-white text-green-800 px-8 py-3 rounded-md font-medium hover:bg-green-100"
            >
              Register as Farmer
            </button>
            <Link 
              to="/products"
              className="border-2 border-white px-8 py-3 rounded-md font-medium hover:bg-green-700"
            >
              Buy Organic Manure
            </Link>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-green-700 p-3 rounded-full mb-4">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Sustainable Farming</h3>
            <p className="mt-2 text-gray-300">Stop stubble burning, start earning</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-700 p-3 rounded-full mb-4">
              <Recycle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Circular Economy</h3>
            <p className="mt-2 text-gray-300">Convert waste into valuable resources</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-700 p-3 rounded-full mb-4">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Economic Benefits</h3>
            <p className="mt-2 text-gray-300">Earn through waste contribution</p>
          </div>
        </div>
      </div>
      {showRegistration && (
        <FarmerRegistration onClose={() => setShowRegistration(false)} />
      )}
    </div>
  );
}