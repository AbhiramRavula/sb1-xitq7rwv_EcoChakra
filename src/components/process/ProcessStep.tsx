import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export default function ProcessStep({ icon: Icon, title, description, step }: ProcessStepProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="bg-green-800 h-12 w-12 rounded-full flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 bg-green-100 rounded-full h-6 w-6 flex items-center justify-center">
            <span className="text-green-800 font-semibold">{step}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
}