import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-xl mx-auto bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Get in touch</h1>
        <p className="text-gray-500 mb-8 font-medium">Fill out the form below to test routing.</p>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Name</label>
            <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
            <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Message</label>
            <textarea rows="4" placeholder="How can we help?" className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;