import React from 'react';
import { Check } from 'lucide-react';

export function BookingConfirmed() {
  const bookingDetails = {
    facility: 'Spa & Wellness',
    location: 'Level 2, Wellness Wing',
    dateTime: 'Today, 9:00 AM',
    guests: '2 People',
    bookingId: '#SPA-2025159-001',
    total: 6300.00,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&q=80'
  };

  const formatPrice = (price) => {
    return `LKR ${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
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
        <h1 className="text-xl font-semibold text-gray-900">Booking Confirmed</h1>
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
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Booking has been confirmed!
          </h2>
          <p className="text-gray-600 text-sm px-6">
            Your spa session is booked. We look forward to welcoming you.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
          {/* Facility Info */}
          <div className="flex items-center space-x-4 pb-5 border-b border-gray-100">
            <div className="w-16 h-16 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={bookingDetails.image}
                alt={bookingDetails.facility}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80x80/1e40af/ffffff?text=Spa';
                }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {bookingDetails.facility}
              </h3>
              <p className="text-sm text-gray-500">
                {bookingDetails.location}
              </p>
            </div>
          </div>

          {/* Booking Details */}
          <div className="pt-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Date & Time</span>
              <span className="text-gray-900 font-medium text-sm">
                {bookingDetails.dateTime}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Guests</span>
              <span className="text-gray-900 font-medium text-sm">
                {bookingDetails.guests}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Booking ID</span>
              <span className="text-gray-900 font-medium text-sm">
                {bookingDetails.bookingId}
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="pt-5 mt-5 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-semibold text-base">Total</span>
              <span className="text-gray-900 font-bold text-lg">
                {formatPrice(bookingDetails.total)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-orange-600 text-white font-semibold py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-sm">
            Add to Calendar
          </button>
          <button className="w-full bg-white text-gray-900 font-semibold py-4 rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition-colors">
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}