import React, { useEffect, useState } from 'react';
import { Clock, Package } from 'lucide-react';
import { getOrders } from '../services/orders';
import type { Order } from '../types/order';

export default function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadOrders() {
      try {
        // This should use the actual user ID from auth context
        const userId = ''; // TODO: Get from auth context
        const orderData = await getOrders(userId);
        setOrders(orderData);
      } catch (err) {
        setError('Failed to load orders');
        console.error('Error loading orders:', err);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Loading orders...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">No orders yet</h2>
            <p className="mt-2 text-gray-600">Your order history will appear here once you make a purchase.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>
        
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-600">
                      {new Date(order.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">Order #{order.id}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-green-800" />
                  <span className={`text-sm font-medium ${
                    order.status === 'delivered' ? 'text-green-800' : 'text-orange-500'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="mb-4">
                  <h3 className="font-medium text-gray-900">Delivery Address</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {order.delivery_address.fullName}<br />
                    {order.delivery_address.address}<br />
                    {order.delivery_address.city}, {order.delivery_address.state} {order.delivery_address.pincode}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">₹{order.total_amount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}