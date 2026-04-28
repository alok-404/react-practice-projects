import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="text-xl font-extrabold tracking-tight text-gray-800">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            PORTFOLIO<span className="text-blue-600">.</span>
          </Link>
        </div>

        {/* Links Section - Yahan sirf Text aayega */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to='/' className="text-gray-600 hover:text-blue-600 transition-all">
            Home
          </Link>
          <Link to='/cards' className="text-gray-600 hover:text-blue-600 transition-all">
            Cards
          </Link>
          <Link to='/contact' className="text-gray-600 hover:text-blue-600 transition-all">
            Contact
          </Link>
          <Link to='/about' className="text-gray-600 hover:text-blue-600 transition-all">
            About
          </Link>
          <Link to='/Gallery' className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-sm">
            Gallery
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Nav