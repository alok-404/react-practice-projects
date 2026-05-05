import React from 'react'
import { Search as SearchIcon, X } from 'lucide-react'

const Search = () => {
  return (
    <div className="w-full max-w-md relative group">
      {/* Search Input Container */}
      <div className="relative flex items-center">
        <SearchIcon 
          className="absolute left-4 text-slate-500 group-focus-within:text-amber-400 transition-colors" 
          size={20} 
        />
        <input 
          type="text" 
          placeholder="Search for animes..." 
          className="w-full bg-slate-900/50 border border-slate-800 text-white pl-12 pr-12 py-4 rounded-2xl outline-none focus:border-amber-400/50 focus:ring-4 focus:ring-amber-400/10 transition-all placeholder:text-slate-600 font-medium"
        />
        {/* Shortcut Hint (Visible on Desktop) */}
        <div className="absolute right-4 hidden md:flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-md border border-slate-700">
           <span className="text-[10px] font-bold text-slate-500">CTRL K</span>
        </div>
      </div>

      {/* Quick Suggestions (Optional UI touch) */}
      <div className="flex gap-2 mt-3 ml-1">
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-1">Hot:</span>
        {['Naruto', 'One Piece', 'Solo Leveling'].map((item) => (
          <button key={item} className="text-[10px] font-bold text-slate-400 hover:text-amber-400 transition-colors bg-slate-900 px-2 py-1 rounded-md border border-slate-800">
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Search