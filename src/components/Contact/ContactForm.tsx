import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-2">Name</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-gray-800/50 border border-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-gray-600 font-light"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2">Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-gray-800/50 border border-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-gray-600 font-light"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full bg-gray-800/50 border border-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-gray-600 font-light resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-gray-800/80 text-gray-200 rounded-md hover:bg-gray-700/80 transition-colors duration-200 font-light tracking-wide"
      >
        Send Message
      </button>
    </form>
  );
}