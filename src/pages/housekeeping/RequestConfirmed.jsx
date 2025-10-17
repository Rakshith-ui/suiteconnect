import React from 'react';
import { Check, Clock } from 'lucide-react';

export function RequestConfirmed() {
  const requestDetails = {
    service: 'Extra Towels',
    quantity: 'Quantity : 2 towels',
    deliveryTime: 'ASAP',
    estimatedDelivery: '10 Minutes',
    requestId: '#HK-2025159-001',
    icon: '🛏️'
  };

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
      <div className="bg-white px-4 py-4 text-center border-b border-gray-100">
        <h1 className="text-xl font-semibold text-gray-900">Request Confirmed</h1>
        <p className="text-sm text-gray-500 mt-1">SuiteConnect</p>
      </div>

      <div className="px-4 py-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-white stroke-[3]" />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Request Submitted Successfully!
          </h2>
          <p className="text-gray-600 text-sm px-4">
            Your housekeeping request has been received and will be processed shortly
          </p>
        </div>

        {/* Estimated Delivery */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <Clock className="w-5 h-5 text-gray-600" />
            <div className="text-center">
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="font-semibold text-gray-900 text-lg">{requestDetails.estimatedDelivery}</p>
            </div>
          </div>
        </div>

        {/* Request Details Card */}
        <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
          {/* Service Info */}
          <div className="flex items-center space-x-4 pb-5 border-b border-gray-100">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">{requestDetails.icon}</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {requestDetails.service}
              </h3>
              <p className="text-sm text-gray-500">
                {requestDetails.quantity}
              </p>
            </div>
          </div>

          {/* Request Details */}
          <div className="pt-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Delivery Time</span>
              <span className="text-gray-900 font-medium text-sm">
                {requestDetails.deliveryTime}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Request ID</span>
              <span className="text-gray-900 font-medium text-sm">
                {requestDetails.requestId}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Link */}
        <p className="text-center text-sm text-gray-600 mb-6">
          Need to modify or cancel?{' '}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Contact Us
          </a>
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-orange-600 text-white font-semibold py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-sm">
            Back to Services
          </button>
          <button className="w-full bg-white text-gray-900 font-semibold py-4 rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition-colors">
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}