import React from 'react';
import { Check, Clock } from 'lucide-react';

export function OrderConfirmed() {
  const orderDetails = {
    orderNumber: '#RS2025-0314',
    estimatedDelivery: '25 Minutes',
    items: [
      { id: 1, name: 'Jaffna Crab Curry', price: 4500.00 },
      { id: 2, name: 'Coconut Mojito', price: 1800.00 }
    ],
    subtotal: 6300.00,
    serviceCharge: 500.75,
  };

  const total = orderDetails.subtotal + orderDetails.serviceCharge;

  const formatPrice = (price) => {
    return `LKR ${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-6 text-center">
        <h1 className="text-xl font-semibold text-gray-900">Order Confirmed</h1>
        <p className="text-sm text-gray-500 mt-1">SuiteConnect</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-white stroke-[3]" />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Order Has been placed!
          </h2>
          <p className="text-gray-600 text-sm px-4">
            Thank you for your order. Our Kitchen team is preparing your meals
          </p>
        </div>

        {/* Estimated Delivery */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <Clock className="w-5 h-5" />
            <div className="text-center">
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="font-semibold text-gray-900">{orderDetails.estimatedDelivery}</p>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Order Details</h3>
          
          {/* Order Items */}
          <div className="space-y-3 mb-4">
            {orderDetails.items.map((item, index) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-gray-900">{item.name}</span>
                </div>
                <span className="text-gray-900 font-medium">
                  {formatPrice(item.price)}
                </span>
              </div>
            ))}
          </div>

          {/* Subtotal and Service Charge */}
          <div className="pt-3 border-t border-gray-200 space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>{formatPrice(orderDetails.subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Service Charge</span>
              <span>{formatPrice(orderDetails.serviceCharge)}</span>
            </div>
          </div>
        </div>

        {/* Order Number */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm text-center">
          <p className="text-sm text-gray-600 mb-1">Order Number</p>
          <p className="text-lg font-semibold text-gray-900">
            {orderDetails.orderNumber}
          </p>
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
            Track Order
          </button>
          <button className="w-full bg-white text-gray-900 font-semibold py-4 rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition-colors">
            Order Again
          </button>
        </div>
      </div>
    </div>
  );
}