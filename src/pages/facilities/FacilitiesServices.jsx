import React, { useState } from 'react';
import { ArrowLeft, Clock, MapPin, Star, Check, Minus, Plus } from 'lucide-react';

export function FacilitiesServices() {
  const [selectedDate, setSelectedDate] = useState('15');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [guests, setGuests] = useState(2);

  const dates = [
    { day: 'Today', date: '15' },
    { day: 'Thu', date: '16' },
    { day: 'Fri', date: '17' },
    { day: 'Sat', date: '18' },
    { day: 'Sun', date: '19' }
  ];

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '5:00 PM', available: false }
  ];

  const amenities = [
    'Professional massage therapists',
    'Private treatment rooms',
    'Aromatherapy & essential oils',
    'Relaxation lounge area',
    'Private lockers & amenities'
  ];

  const pricePerPerson = 5000.00;
  const totalPrice = pricePerPerson * guests;

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
      <div className="bg-white px-4 py-3 flex items-center space-x-4">
        <button className="p-1">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Facilities & Services</h1>
          <p className="text-xs text-gray-500">SuiteConnect</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
          alt="Spa & Wellness"
          className="w-full h-56 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x400/1e40af/ffffff?text=Spa+%26+Wellness';
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-green-400 text-white text-xs font-medium rounded-full">
            Available
          </span>
        </div>
      </div>

      <div className="px-4 py-5 space-y-5">
        {/* Title & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Spa & Wellness Center</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Indulge in our luxury spa experience with professional massage therapists, aromatherapy treatments, and relaxation facilities.
          </p>

          {/* Info Items */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm">Open 9:00 AM - 8:00 PM</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm">Level 2, Wellness Wing</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-gray-700">4.8 rating • </span>
              <span className="text-sm text-blue-600 font-medium">124 Reviews</span>
            </div>
          </div>
        </div>

        {/* Book Your Session */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Book Your Session</h3>
          
          {/* Select Date */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Select Date</p>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {dates.map((date) => (
                <button
                  key={date.date}
                  onClick={() => setSelectedDate(date.date)}
                  className={`flex-shrink-0 px-4 py-3 rounded-xl text-center min-w-[60px] transition-colors ${
                    selectedDate === date.date
                      ? 'bg-orange-700 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-xs font-medium">{date.day}</div>
                  <div className="text-lg font-bold mt-1">{date.date}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Available Times */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Available Times</p>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => slot.available && setSelectedTime(slot.time)}
                  disabled={!slot.available}
                  className={`py-3 rounded-xl text-sm font-medium transition-colors ${
                    selectedTime === slot.time && slot.available
                      ? 'bg-orange-700 text-white'
                      : slot.available
                      ? 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Number of Guests</p>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between">
              <span className="text-gray-700">Guests</span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-lg font-semibold text-gray-900 w-8 text-center">
                  {guests}
                </span>
                <button
                  onClick={() => setGuests(guests + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities & Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities & Services</h3>
          <div className="space-y-2">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Book Now Button */}
        <button className="w-full bg-orange-600 text-white font-semibold py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-lg">
          Book Now - {formatPrice(totalPrice)}
        </button>
      </div>
    </div>
  );
}