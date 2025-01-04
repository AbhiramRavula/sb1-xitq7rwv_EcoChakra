import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface AddToCartModalProps {
  product: Product;
  onClose: () => void;
}

export default function AddToCartModal({ product, onClose }: AddToCartModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        quantity,
        price: product.price,
        name: product.name,
        unit: product.unit
      }
    });
    onClose();
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Add to Cart</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium">{product.name}</h4>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity (in {product.unit})
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
          />
          <p className="mt-2 text-sm text-gray-600">
            Total: ₹{(product.price * quantity).toFixed(2)}
          </p>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}