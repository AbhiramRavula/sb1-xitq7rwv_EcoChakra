import React, { useState } from 'react';
import { Sprout, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import FarmerRegistration from './auth/FarmerRegistration';

export default function Navbar() {
  const [showRegistration, setShowRegistration] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">EcoChakra</span>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => scrollToSection('farmers')} 
                  className="hover:bg-green-700 px-3 py-2 rounded-md cursor-pointer"
                >
                  For Farmers
                </button>
                <Link to="/processing-units" className="hover:bg-green-700 px-3 py-2 rounded-md">
                  Processing Units
                </Link>
                <Link to="/products" className="hover:bg-green-700 px-3 py-2 rounded-md">Products</Link>
                <button 
                  onClick={() => scrollToSection('impact')} 
                  className="hover:bg-green-700 px-3 py-2 rounded-md cursor-pointer"
                >
                  Impact
                </button>
                <button 
                  onClick={() => setShowRegistration(true)}
                  className="bg-white text-green-800 px-4 py-2 rounded-md font-medium hover:bg-green-100"
                >
                  Join Now
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
            </div>
          </div>
        </div>
      </nav>
      {showRegistration && (
        <FarmerRegistration onClose={() => setShowRegistration(false)} />
      )}
    </>
  );
}