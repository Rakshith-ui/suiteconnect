import React from 'react';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-700 text-white px-6 py-4">
        <h1 className="text-xl font-bold">SuiteConnect</h1>
        <p className="text-orange-100 text-sm">Welcome, Guest</p>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Luxury Experience Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Luxury Experience</h2>
          <p className="text-gray-600 text-sm">Everything you need at your fingertips</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Room Service */}
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-600">
                <path d="M8.1 13.34L3 8.24V6H5.24L8.1 8.86L8.1 13.34M14.5 20C16.43 20 18 18.43 18 16.5S16.43 13 14.5 13 11 14.57 11 16.5 12.57 20 14.5 20M21 7L19 5H8L6 7H21M19 12H16L15 10H21L19 12Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Room Service</h3>
            <p className="text-gray-500 text-xs">Order food & drinks</p>
          </div>

          {/* Hotel Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-600">
                <path d="M7 10L12 6L17 10V18H15V12H9V18H7V10Z" fill="currentColor"/>
                <path d="M2 8L12 2L22 8V9H2V8Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Hotel Info</h3>
            <p className="text-gray-500 text-xs">Facilities & Activities</p>
          </div>

          {/* Housekeeping */}
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-600">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z" fill="currentColor"/>
                <path d="M7 10H9V12H7V10ZM11 10H17V12H11V10ZM7 14H9V16H7V14ZM11 14H17V16H11V14Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Housekeeping</h3>
            <p className="text-gray-500 text-xs">Room Care & Extras</p>
          </div>

          {/* Support */}
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-600">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Support</h3>
            <p className="text-gray-500 text-xs">Quick Assistance</p>
          </div>
        </div>

        {/* Exclusive Offers Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Exclusive Offers</h3>
          
          {/* Offers Carousel */}
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {/* Spa & Wellness Offer */}
            <div className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-6 bg-white/80 rounded"></div>
                    <div className="w-6 h-4 bg-white/60 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 mb-2">20% Off Spa & Wellness</h4>
                <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                  Relax and rejuvenate with our signature treatments
                </p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Morning Activities Offer */}
            <div className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-32 bg-gradient-to-r from-green-500 to-green-700 relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-2 right-2">
                  <div className="w-8 h-8 bg-white/80 rounded-full"></div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 mb-2">Morning Activities</h4>
                <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                  Join our energizing outdoor activities
                </p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}