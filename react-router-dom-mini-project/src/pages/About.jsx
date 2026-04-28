import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">About Our Mission</h1>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-500 leading-relaxed font-medium">
              We are a team of passionate developers creating high-quality web experiences. 
              This page is a placeholder to show you how the routing handles content.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-500 leading-relaxed font-medium">
              Making the web beautiful, one pixel at a time. Leveraging modern tools like 
              React and Tailwind CSS for the best performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;