import React, { useState } from 'react';
import { ArrowLeft, Search, ShoppingCart, Plus } from 'lucide-react';

export function RoomService() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Drinks'];

  const menuItems = [
    {
      id: 1,
      name: 'Jaffna Crab Curry',
      description: 'Spicy Northern Delicacy',
      price: 'LKR 4,500',
      image: '/api/placeholder/80/80',
      category: 'Dinner'
    },
    {
      id: 2,
      name: 'Lamprais',
      description: 'Sri Lankan Rice Parcel',
      price: 'LKR 1,800',
      image: '/images/ExteriorShot.svg',
      category: 'Lunch'
    },
    {
      id: 3,
      name: 'Polos Ambula',
      description: 'Young Jackfruit Curry',
      price: 'LKR 1,900',
      image: '/api/placeholder/80/80',
      category: 'Dinner'
    },
    {
      id: 4,
      name: 'Ambul Thiyal',
      description: 'Tangy Sour Fish Curry',
      price: 'LKR 2,800',
      image: '/api/placeholder/80/80',
      category: 'Dinner'
    },
    {
      id: 5,
      name: 'Coconut Mojito',
      description: 'Chilled tropical refreshment',
      price: 'LKR 900',
      image: '/api/placeholder/80/80',
      category: 'Drinks'
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-1">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Room Service</h1>
              <p className="text-sm text-gray-500">SuiteConnect</p>
            </div>
          </div>
          <button className="p-2">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      item.id === 1 ? '1565299624946-b28f40a0ca4b' : // Crab curry
                      item.id === 2 ? '1574653969557-22071c3c9b06' : // Rice dish
                      item.id === 3 ? '1565299507177-b0ac66763fb1' : // Jackfruit curry
                      item.id === 4 ? '1563379091339-03fa3e22d531' : // Fish curry
                      '1544145945-f90425340c7e' // Mojito
                    }?w=400&q=80`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/80x80/f3f4f6/6b7280?text=${item.name.charAt(0)}`;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                  <p className="text-lg font-semibold text-gray-900">{item.price}</p>
                </div>
                <button className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors flex-shrink-0">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No dishes found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
