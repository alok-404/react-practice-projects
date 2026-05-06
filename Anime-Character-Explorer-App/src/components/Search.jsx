import React, { useEffect, useState } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Search = () => {
const navigate = useNavigate()

 const [query, setQuery] = useState('')
 const [loading, setLoading] = useState(false)
 const [error , setError] = useState(null)
 const [results, setResults] = useState([])

  const inputHandler = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const fetchSearchResults = async () => {
    setLoading(true)
    setError(null)
    try{
      const API_URL = `https://api.jikan.moe/v4/anime?q=${query}`
      const response = await axios.get(API_URL)
      console.log(response.data.data)
      setResults(response.data.data)
    }
    catch(error){
      console.error('Error fetching search results:', error)
      setError('Failed to fetch search results. Please try again.')
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if(query.length > 2){
      const delayDebounce = setTimeout(() => {
        fetchSearchResults()
      }, 500) 

      return () => clearTimeout(delayDebounce) // Cleanup timeout on query change
    }
  }, [query])

  const allResultHadler = () => {
    if(results.length > 0){
      navigate(`/search?q=${query}`)
    }
  }


  

  return (
    <div className="w-full max-w-md relative group">
      {/* Search Input Container */}
      <div className="relative flex items-center">
        <SearchIcon 
          className="absolute left-4 text-slate-500 group-focus-within:text-amber-400 transition-colors" 
          size={20} 
        />
        <input 
        onChange={inputHandler}
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

      {/* Loading and Error States */}
      {loading && <p className="text-sm text-slate-500 mt-2">Loading...</p>}
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
     {results.length > 0 && (
      <div className="absolute top-full left-0 w-full bg-slate-900 border border-slate-800 rounded-md mt-2 p-4 z-10">
        {results.slice(0,5).map((anime) => (
          <div key={anime.mal_id} className="flex items-center gap-4 mb-3">
            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-12 h-16 object-cover rounded-md" />
            <div>
              <p className="text-sm font-bold">{anime.title}</p>
              <p className="text-xs text-slate-500">{anime.type} - {anime.status}</p> 
            </div>
          </div>
          
        ))}
        <button
          onClick={allResultHadler}
          className="w-full text-center text-sm text-amber-400 hover:bg-gray-600 cursor-pointer py-2 rounded-md transition-colors"
        >View all results</button>
      </div>
     )}
    </div>
  )
}

export default Search