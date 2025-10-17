import React from 'react';
import { ArrowLeft, Phone, MessageCircle, Star, ChevronRight, Info } from 'lucide-react';

export function Support() {
  const supportOptions = [
    {
      id: 1,
      title: 'Emergency Help',
      description: 'Immediate call assistance available',
      icon: <Phone className="w-6 h-6 text-white" />,
      bgColor: 'bg-red-400',
      iconBgColor: 'bg-red-500',
      isEmergency: true
    },
    {
      id: 2,
      title: 'Live Chat',
      description: 'Chat with our front desk team',
      icon: <MessageCircle className="w-6 h-6 text-orange-700" />,
      bgColor: 'bg-white',
      iconBgColor: 'bg-orange-100',
      isEmergency: false
    },
    {
      id: 3,
      title: 'Feedback',
      description: 'Share your Feedback with us',
      icon: <Star className="w-6 h-6 text-orange-700" />,
      bgColor: 'bg-white',
      iconBgColor: 'bg-orange-100',
      isEmergency: false
    }
  ];

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
        <div className="flex items-center space-x-4">
          <button className="p-1">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Support</h1>
            <p className="text-sm text-gray-500">SuiteConnect</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Instruction Text */}
        <p className="text-gray-600 text-sm mb-6">
          Need help? Choose an option below.
        </p>

        {/* Support Options */}
        <div className="space-y-4">
          {supportOptions.map((option) => (
            <button
              key={option.id}
              className={`w-full ${option.bgColor} rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4 text-left`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${option.iconBgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                {option.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold mb-1 ${option.isEmergency ? 'text-white text-lg' : 'text-gray-900'}`}>
                  {option.title}
                </h3>
                <p className={`text-sm ${option.isEmergency ? 'text-white text-opacity-90' : 'text-gray-500'}`}>
                  {option.description}
                </p>
              </div>

              {/* Arrow */}
              <ChevronRight className={`w-6 h-6 flex-shrink-0 ${option.isEmergency ? 'text-white' : 'text-gray-400'}`} />
            </button>
          ))}
        </div>

        {/* Quick Tip */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-4">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-blue-900 font-semibold text-sm mb-1">Quick Tip</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                For urgent matters, use Emergency Help. For general inquiries, try Live Chat first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}