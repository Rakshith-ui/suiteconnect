import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';

export function LiveChat() {
  const [message, setMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Medical Emergency');

  const categories = ['Medical Emergency', 'Room Service', 'Laundry', 'Maintenance'];

  const messages = [
    {
      id: 1,
      sender: 'staff',
      text: 'Hello! Welcome to SuiteConnect. How can I assist you today?',
      time: '2:45 PM',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80'
    },
    {
      id: 2,
      sender: 'user',
      text: 'Hey! I need help with my room service order.',
      time: '2:46 PM'
    },
    {
      id: 3,
      sender: 'staff',
      text: 'Of course! I\'d be happy to help with your room service. What specific assistance do you need?',
      time: '2:47 PM',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message logic
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
            <h1 className="text-xl font-semibold text-gray-900">Reception Live Chat</h1>
            <p className="text-sm text-gray-500">SuiteConnect</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2 max-w-[80%]`}>
              {msg.sender === 'staff' && (
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img
                    src={msg.avatar}
                    alt="Staff"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/40x40/9ca3af/ffffff?text=S';
                    }}
                  />
                </div>
              )}
              <div className={msg.sender === 'user' ? 'ml-2' : 'mr-2'}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.sender === 'user'
                      ? 'bg-orange-700 text-white rounded-br-sm'
                      : 'bg-white text-gray-900 rounded-bl-sm shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
                <p className={`text-xs text-gray-500 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-3">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-red-400 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white px-4 py-3 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
          <button
            onClick={handleSendMessage}
            className="w-11 h-11 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors flex-shrink-0"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}