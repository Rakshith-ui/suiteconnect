import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export function ExtraTowels() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cleaning', 'Laundry', 'Turndown'];

  const services = [
    {
      id: 1,
      name: 'Room Cleaning',
      description: 'Full room service',
      icon: '🧹',
      category: 'Cleaning'
    },
    {
      id: 2,
      name: 'Extra Towels',
      description: 'Fresh Towels',
      icon: '🛏️',
      category: 'Cleaning'
    },
    {
      id: 3,
      name: 'Extra Pillows',
      description: 'Comfort Pillows',
      icon: '🛋️',
      category: 'Cleaning'
    },
    {
      id: 4,
      name: 'Laundry Service',
      description: 'Wash & fold',
      icon: '👔',
      category: 'Laundry'
    },
    {
      id: 5,
      name: 'Minibar Refill',
      description: 'Beverages & Snacks',
      icon: '🥤',
      category: 'All'
    },
    {
      id: 6,
      name: 'Toiletries Refill',
      description: 'Bathroom Essentials',
      icon: '🧴',
      category: 'All'
    },
    {
      id: 7,
      name: 'Extra Blanket',
      description: 'Comfort Quilts',
      icon: '🛏️',
      category: 'Cleaning'
    },
    {
      id: 8,
      name: 'Ironing Service',
      description: 'Reliable Garment Care',
      icon: '👔',
      category: 'Laundry'
    }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="bg-white px-4 pt-3 pb-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">9:41</span>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="3" width="4" height="9" rx="1" fill="currentColor"/>
              <rect x="6" y="1" width="4" height="11" rx="1" fill="currentColor"/>
              <rect x="12" y="0" width="4" height="12" rx="1" fill="currentColor"/>
            </svg>
            <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
              <path d="M2 6C2 3.79086 3.79086 2 6 2H10C12.2091 2 14 3.79086 14 6V6C14 8.20914 12.2091 10 10 10H6C3.79086 10 2 8.20914 2 6V6Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <svg className="w-5 h-4" viewBox="0 0 24 12" fill="none">
              <rect x="1" y="1" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="20" y="3.5" width="3" height="5" rx="1" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center space-x-4">
          <button className="p-1">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Housekeeping & Services</h1>
            <p className="text-sm text-gray-500">SuiteConnect</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Category Filter */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">{service.icon}</span>
              </div>
              
              {/* Service Name */}
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                {service.name}
              </h3>
              
              {/* Service Description */}
              <p className="text-xs text-gray-500 mb-4">
                {service.description}
              </p>
              
              {/* Request Button */}
              <button className="w-full bg-orange-600 text-white font-semibold py-2.5 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                Request
              </button>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found</p>
            <p className="text-gray-400 text-sm mt-2">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
}