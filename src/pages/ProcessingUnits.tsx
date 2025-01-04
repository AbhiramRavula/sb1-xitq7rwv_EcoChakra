import React from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  name: string;
  status: 'active' | 'upcoming';
  lat: number;
  lng: number;
}

const locations: Location[] = [
  { name: 'Delhi NCR', status: 'active', lat: 28.7041, lng: 77.1025 },
  { name: 'Mumbai', status: 'active', lat: 19.0760, lng: 72.8777 },
  { name: 'Bangalore', status: 'upcoming', lat: 12.9716, lng: 77.5946 },
  { name: 'Chennai', status: 'upcoming', lat: 13.0827, lng: 80.2707 },
  { name: 'Kolkata', status: 'upcoming', lat: 22.5726, lng: 88.3639 }
];

export default function ProcessingUnits() {
  return (
    <div className="min-h-screen bg-green-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Processing Units Network</h1>
          <p className="mt-4 text-xl text-gray-600">
            Strategic locations across India transforming agricultural waste into value
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              <img
                src="https://images.unsplash.com/photo-1585282263861-f55e341878f8?auto=format&fit=crop&q=80"
                alt="India Map"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${((location.lng - 68) / (97 - 68)) * 100}%`,
                    top: `${((location.lat - 8) / (37 - 8)) * 100}%`
                  }}
                >
                  <MapPin
                    className={`h-6 w-6 -ml-3 -mt-3 ${
                      location.status === 'active' ? 'text-green-600' : 'text-orange-500'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Processing Locations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">Active Units</h3>
                <div className="space-y-3">
                  {locations
                    .filter(loc => loc.status === 'active')
                    .map((location, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{location.name}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">Upcoming Units</h3>
                <div className="space-y-3">
                  {locations
                    .filter(loc => loc.status === 'upcoming')
                    .map((location, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">{location.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Want to Partner?</h3>
              <p className="text-gray-600 mb-4">
                We're expanding our network. If you're interested in setting up a processing unit,
                contact us for partnership opportunities.
              </p>
              <button className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Contact for Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}