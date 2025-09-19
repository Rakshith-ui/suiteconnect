import React from 'react';

export function SplashScreen() {
  return (
    <div className="min-h-screen bg-white flex flex-col mx-6">
      {/* Header Section */}
      <div className="flex flex-col items-center  pb-4 mt-8 ">
        {/* Logo */}
        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-8">
          <div className="text-orange-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C10.89 2 10 2.89 10 4V6C8.89 6 8 6.89 8 8V10C6.89 10 6 10.89 6 12C6 13.11 6.89 14 8 14V16C8 17.11 8.89 18 10 18V20C10 21.11 10.89 22 12 22C13.11 22 14 21.11 14 20V18C15.11 18 16 17.11 16 16V14C17.11 14 18 13.11 18 12C18 10.89 17.11 10 16 10V8C16 6.89 15.11 6 14 6V4C14 2.89 13.11 2 12 2Z"/>
            </svg>
          </div>
        </div>

        {/* Welcome Text */}
        <p className="text-gray-600 text-base mb-2">Welcome to</p>
        
        {/* Hotel Name */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          The Boutique Grand
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-center text-sm leading-relaxed px-4 mb-8">
          Experience luxury and comfort during your stay. Access exclusive services and amenities at your fingertips.
        </p>
      </div>

      {/* Hotel Image */}
      <div className="  mb-8">
        <img src='images/ExteriorShot.svg' className=' rounded-[12px] w-full '/>
      </div>

      {/* Services List */}
      <div className=" space-y-4 mb-8">
        {/* 24/7 Concierge Service */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
              </svg>
            </div>
          </div>
          <span className="text-gray-800 font-medium">24/7 Concierge Service</span>
        </div>

        {/* Room Service & Dining */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M8.1 13.34L3 8.24V6H5.24L8.1 8.86L8.1 13.34M14.5 20C16.43 20 18 18.43 18 16.5S16.43 13 14.5 13 11 14.57 11 16.5 12.57 20 14.5 20M21 7L19 5H8L6 7H21M19 12H16L15 10H21L19 12Z"/>
              </svg>
            </div>
          </div>
          <span className="text-gray-800 font-medium">Room Service & Dining</span>
        </div>

        {/* Complimentary WiFi */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M1,9L3,7C6.61,3.39 17.39,3.39 21,7L23,9C19.93,12.07 4.07,12.07 1,9M5,13L7,11C8.61,9.39 15.39,9.39 17,11L19,13C16.93,16.07 7.07,16.07 5,13M9,17L11,15C11.56,14.44 12.44,14.44 13,15L15,17C13.93,20.07 10.07,20.07 9,17"/>
              </svg>
            </div>
          </div>
          <span className="text-gray-800 font-medium">Complimentary WiFi</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className=" pb-8">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200">
          Start Your Experience
        </button>
        
        {/* Footer Text */}
        <p className="text-center text-gray-500 text-sm mt-4">
          No login required • Instant access
        </p>
      </div>
    </div>
  );
}