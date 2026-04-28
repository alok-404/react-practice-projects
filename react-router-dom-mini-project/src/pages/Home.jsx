import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6">
          Build Something <span className="text-blue-600">Great.</span>
        </h1>
        <p className="text-lg text-gray-500 font-medium mb-8 leading-relaxed">
          Welcome to your new project! This is the Home page dummy UI. 
          Everything is set up and routing is working perfectly.
        </p>
        <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2 mx-auto shadow-lg shadow-gray-200">
          Get Started <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};