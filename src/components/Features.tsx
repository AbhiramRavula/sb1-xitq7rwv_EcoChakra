import React from 'react';
import { Users, Factory, ShoppingBag, LineChart } from 'lucide-react';

export default function Features() {
  return (
    <div id="farmers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How EcoChakra Works</h2>
          <p className="mt-4 text-xl text-gray-600">A complete ecosystem for sustainable agriculture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="bg-green-800 inline-block p-3 rounded-lg text-white mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">For Farmers</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Request waste collection</li>
              <li>• Earn incentives</li>
              <li>• Get subsidized manure</li>
              <li>• Track contributions</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="bg-green-800 inline-block p-3 rounded-lg text-white mb-4">
              <Factory className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Units</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Manage supply chain</li>
              <li>• Optimize processing</li>
              <li>• Quality control</li>
              <li>• Distribution tracking</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="bg-green-800 inline-block p-3 rounded-lg text-white mb-4">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">For Buyers</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Direct purchase</li>
              <li>• Quality assurance</li>
              <li>• Origin tracking</li>
              <li>• Bulk ordering</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="bg-green-800 inline-block p-3 rounded-lg text-white mb-4">
              <LineChart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact Tracking</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Environmental metrics</li>
              <li>• Carbon credits</li>
              <li>• Policy compliance</li>
              <li>• Success stories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}