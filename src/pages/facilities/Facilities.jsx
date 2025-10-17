import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';

export function Facilities() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Fitness', 'Wellness', 'Dining', 'Tours'];

  const facilities = [
    {
      id: 1,
      name: 'Spa & Wellness',
      description: 'Open 9am - 8pm • Massage & treatments',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      category: 'Wellness',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Fitness Center',
      description: 'Open 24/7 • State-of-the-art equipment',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      category: 'Fitness',
      status: 'Available'
    },
    {
      id: 3,
      name: 'Rooftop Pool',
      description: 'Open 7am - 10pm • Infinity pool with city views',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80',
      category: 'Wellness',
      status: 'Available'
    },
    {
      id: 4,
      name: 'Fine Dining Restaurant',
      description: 'Open 11am - 11pm • International cuisine',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      category: 'Dining',
      status: 'Fully Booked'
    },
    {
      id: 5,
      name: 'City Tours',
      description: 'Daily tours • Explore local attractions',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      category: 'Tours',
      status: 'Available'
    }
  ];

  const filteredFacilities = facilities.filter(facility => {
    const matchesCategory = selectedCategory === 'All' || facility.category === selectedCategory;
    const matchesSearch = facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         facility.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <div className="flex items-center space-x-4 mb-4">
          <button className="p-1">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Facilities & Services</h1>
            <p className="text-sm text-gray-500">SuiteConnect</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search facilities or activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
          />
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

        {/* Facilities Grid */}
        <div className="space-y-4">
          {filteredFacilities.map((facility) => (
            <div key={facility.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Facility Image */}
              <div className="relative h-52">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/f3f4f6/6b7280?text=Facility';
                  }}
                />
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    facility.status === 'Available' 
                      ? 'bg-green-400 text-white' 
                      : 'bg-red-400 text-white'
                  }`}>
                    {facility.status}
                  </span>
                </div>
              </div>

              {/* Facility Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {facility.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {facility.description}
                </p>
                <button 
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    facility.status === 'Available'
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                  disabled={facility.status !== 'Available'}
                >
                  {facility.status === 'Available' ? 'Book Now' : 'Fully Booked'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredFacilities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No facilities found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
