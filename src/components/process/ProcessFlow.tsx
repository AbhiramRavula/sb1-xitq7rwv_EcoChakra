import React from 'react';
import { ClipboardList, Truck, Factory, ShoppingBag } from 'lucide-react';
import ProcessStep from './ProcessStep';

export default function ProcessFlow() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Register & List Waste",
      description: "Farmers register on the platform and list their agricultural waste for collection."
    },
    {
      icon: Truck,
      title: "Collection & Transport",
      description: "Waste is collected from farms and transported to nearby processing facilities."
    },
    {
      icon: Factory,
      title: "Processing",
      description: "Agricultural waste is processed into high-quality organic fertilizer using sustainable methods."
    },
    {
      icon: ShoppingBag,
      title: "Distribution",
      description: "Processed fertilizer is sold to farmers and other buyers at competitive prices."
    }
  ];

  return (
    <div id="impact" className="bg-green-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">The EcoChakra Cycle</h2>
          <p className="mt-4 text-xl text-gray-600">Converting waste into value through a sustainable process</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}