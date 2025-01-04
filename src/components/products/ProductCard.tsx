import React, { useState } from 'react';
import { Product } from '../../types/product';
import { Package } from 'lucide-react';
import AddToCartModal from './AddToCartModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-48 relative">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-green-100 flex items-center justify-center">
              <Package className="h-12 w-12 text-green-800" />
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4">
            <span className="text-2xl font-bold text-green-800">₹{product.price}</span>
            <span className="text-gray-600">/{product.unit}</span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 w-full bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
        {(product.benefits || product.composition) && (
          <div className="px-6 pb-6">
            {product.benefits && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">Benefits:</h4>
                <ul className="mt-2 space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600 text-sm">• {benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.composition && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">Composition:</h4>
                <ul className="mt-2 space-y-1">
                  {product.composition.map((item, index) => (
                    <li key={index} className="text-gray-600 text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      {showModal && (
        <AddToCartModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}