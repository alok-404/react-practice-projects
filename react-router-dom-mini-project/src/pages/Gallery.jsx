import React from 'react';

const Gallery = () => {
  // Dummy images for UI testing
  const dummyImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
          Our <span className="text-blue-600">Gallery</span>
        </h1>
        <p className="text-gray-500 mt-2 font-medium">
          Routing test successful! Explore our dummy collection below.
        </p>
      </div>

      {/* Responsive Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyImages.map((img, index) => (
          <div 
            key={index} 
            className="relative h-64 overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <img 
              src={img} 
              alt={`Gallery Item ${index}`} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Image
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State / Footer */}
      <div className="max-w-7xl mx-auto mt-16 text-center py-10 border-t border-gray-100">
        <p className="text-gray-400 text-sm italic">
          End of dummy gallery content.
        </p>
      </div>
    </div>
  );
};

export default Gallery;