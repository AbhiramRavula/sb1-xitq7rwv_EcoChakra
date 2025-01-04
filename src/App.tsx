import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Quote from './components/Quote';
import ProcessFlow from './components/process/ProcessFlow';
import Products from './pages/Products';
import ProcessingUnits from './pages/ProcessingUnits';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Quote />
      <ProcessFlow />
    </main>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/processing-units" element={<ProcessingUnits />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<OrderHistory />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}