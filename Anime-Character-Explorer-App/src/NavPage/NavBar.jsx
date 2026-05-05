import React from 'react'
import { AlertCircle, Play, Star, Zap } from "lucide-react";
import Search from '../components/Search';


const NavBar = () => {



  return (
         <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
        <div>
          <h1 className="text-5xl font-black tracking-tighter">
            EXPLORE <span className="text-amber-400">ANIME</span>
          </h1>
          <p className="text-slate-400 mt-2 font-medium italic">
            Discover the top rated anime series of all time.
          </p>
        </div>

      {/* 2. SEARCH BAR ADDED HERE (Middle) */}
      <div className="w-full flex justify-center">
        <Search />
      </div>

      {/* 3. Action Button (Right) */}
      <div className="shrink-0">
        <button
          className="group relative flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-black font-black px-10 py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-105 active:scale-95"
        >
          <Zap size={20} className="group-hover:animate-bounce" />
          <span className="text-lg uppercase tracking-wider">
            Top Anime
          </span>
        </button>
      </div>

    </div>
  )
}

export default NavBar