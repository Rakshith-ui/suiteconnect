import React, { useState } from 'react';
import { ArrowLeft, Trash2, ChevronDown } from 'lucide-react';

export function MyCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Jaffna Crab Curry',
      pricePerItem: 4500,
      quantity: 1,
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Coconut Mojito',
      pricePerItem: 900,
      quantity: 2,
      image: '/api/placeholder/60/60'
    }
  ]);

  const [deliveryTime, setDeliveryTime] = useState('asap');
  const [specialRequests, setSpecialRequests] = useState('');
  const serviceCharge = 500.75;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.pricePerItem * item.quantity), 0);
  const total = subtotal + serviceCharge;

  const formatPrice = (price) => {
    return `LKR ${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center space-x-4 sticky top-0 z-10 shadow-sm">
        <button className="p-1">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">My Order</h1>
          <p className="text-sm text-gray-500">SuiteConnect</p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      item.id === 1 ? '1565299624946-b28f40a0ca4b' : 
                      '1544145945-f90425340c7e'
                    }?w=200&q=80`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/60x60/f3f4f6/6b7280?text=${item.name.charAt(0)}`;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 p-1 -mt-1"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    {formatPrice(item.pricePerItem)} each
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 bg-gray-50 rounded-lg px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-200 rounded"
                      >
                        <span className="text-xl font-light">−</span>
                      </button>
                      <span className="font-semibold text-gray-900 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-200 rounded"
                      >
                        <span className="text-xl font-light">+</span>
                      </button>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {formatPrice(item.pricePerItem * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Requests */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-3">Special Requests</h2>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any special instructions? (e.g. extra sauce, allergies)..."
            className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            rows="3"
          />
        </div>

        {/* Delivery Time */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-4">Delivery Time</h2>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="deliveryTime"
                  value="asap"
                  checked={deliveryTime === 'asap'}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-5 h-5 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                {deliveryTime === 'asap' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                )}
              </div>
              <span className="text-gray-900">As soon as possible (30-45 min)</span>
            </label>
            
            <label className="flex items-center space-x-3 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="deliveryTime"
                  value="later"
                  checked={deliveryTime === 'later'}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-5 h-5 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                {deliveryTime === 'later' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                )}
              </div>
              <span className="text-gray-900">Schedule for later</span>
            </label>

            {deliveryTime === 'later' && (
              <div className="ml-8 mt-2">
                <div className="relative">
                  <select className="w-full p-3 pr-10 border border-gray-200 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700">
                    <option>Select Time</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Service Charge</span>
              <span>{formatPrice(serviceCharge)}</span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <div className="flex justify-between font-semibold text-gray-900 text-lg">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <button className="w-full bg-orange-600 text-white font-semibold py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-lg">
          Place Order
        </button>
      </div>
    </div>
  );
}