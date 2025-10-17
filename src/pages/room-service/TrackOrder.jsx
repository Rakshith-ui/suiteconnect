import React from 'react';
import { Check, UtensilsCrossed, Truck, Clock } from 'lucide-react';

export function TrackOrder() {
  const orderDetails = {
    orderNumber: '#RS2025-0314',
    estimatedTime: '25 Minutes',
    currentStatus: 'preparing', // 'received', 'preparing', 'delivery'
    items: [
      { id: 1, name: 'Jaffna Crab Curry', quantity: 1, price: 4500.00 },
      { id: 2, name: 'Coconut Mojito', quantity: 2, price: 1800.00 }
    ],
    subtotal: 6300.00,
    serviceCharge: 500.75,
  };

  const formatPrice = (price) => {
    return `LKR ${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  const getStatusStyle = (status) => {
    if (status === 'received') {
      return 'bg-orange-700 text-white';
    } else if (status === 'preparing' && orderDetails.currentStatus === 'preparing') {
      return 'bg-orange-700 text-white';
    } else if (status === 'delivery' && orderDetails.currentStatus === 'delivery') {
      return 'bg-orange-700 text-white';
    } else if (
      (status === 'received') ||
      (status === 'preparing' && orderDetails.currentStatus === 'delivery')
    ) {
      return 'bg-orange-700 text-white';
    }
    return 'bg-gray-300 text-gray-600';
  };

  const getLineStyle = (position) => {
    if (position === 'first') {
      return orderDetails.currentStatus !== 'received' ? 'bg-orange-700' : 'bg-gray-300';
    }
    if (position === 'second') {
      return orderDetails.currentStatus === 'delivery' ? 'bg-orange-700' : 'bg-gray-300';
    }
    return 'bg-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="bg-white px-4 pt-3 pb-2">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="font-medium">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-0.5">
              <div className="w-4 h-3 border border-gray-900 rounded-sm"></div>
              <div className="w-4 h-3 border border-gray-900 rounded-sm"></div>
              <div className="w-4 h-3 border border-gray-900 rounded-sm"></div>
              <div className="w-4 h-3 border border-gray-900 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 text-center">
        <h1 className="text-xl font-semibold text-gray-900">Track Order</h1>
        <p className="text-sm text-gray-500 mt-1">SuiteConnect</p>
      </div>

      <div className="px-4 py-6">
        {/* Order Number */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm text-center">
          <p className="text-sm text-gray-600 mb-1">Order Number</p>
          <p className="text-lg font-semibold text-gray-900">
            {orderDetails.orderNumber}
          </p>
        </div>

        {/* Order Status Tracker */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between relative mb-8">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 -z-0" style={{ left: '12.5%', right: '12.5%' }}>
              <div 
                className={`h-full transition-all duration-500 ${
                  orderDetails.currentStatus === 'preparing' ? 'w-1/2' : 
                  orderDetails.currentStatus === 'delivery' ? 'w-full' : 'w-0'
                } ${getLineStyle('first')}`}
              ></div>
            </div>

            {/* Order Received */}
            <div className="flex flex-col items-center z-10 flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusStyle('received')} mb-2 shadow-md`}>
                <Check className="w-6 h-6" strokeWidth={3} />
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Order<br />Received</p>
            </div>

            {/* Being Prepared */}
            <div className="flex flex-col items-center z-10 flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusStyle('preparing')} mb-2 shadow-md`}>
                <UtensilsCrossed className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Being<br />Prepared</p>
            </div>

            {/* Delivery */}
            <div className="flex flex-col items-center z-10 flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusStyle('delivery')} mb-2 shadow-md`}>
                <Truck className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Delivery</p>
            </div>
          </div>

          {/* Estimated Time */}
          <div className="flex items-center justify-center space-x-2 text-gray-700 pt-4 border-t border-gray-200">
            <Clock className="w-5 h-5 text-gray-600" />
            <div className="text-center">
              <p className="text-sm text-gray-600">Estimated Time Remaining</p>
              <p className="font-semibold text-gray-900 text-lg">{orderDetails.estimatedTime}</p>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Order Details</h3>
          
          {/* Order Items */}
          <div className="space-y-3 mb-4">
            {orderDetails.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-700 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">
                      {item.quantity}x
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

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-orange-600 text-white font-semibold py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-sm">
            Return Home
          </button>
          <button className="w-full bg-white text-gray-900 font-semibold py-4 rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition-colors">
            Contact Reception
          </button>
        </div>
      </div>
    </div>
  );
}