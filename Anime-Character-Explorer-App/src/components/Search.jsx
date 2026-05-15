import React, { useEffect, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // ✅ NEW

  const inputHandler = (e) => {
    setQuery(e.target.value);
  };

  const fetchSearchResults = async () => {
    setLoading(true);
    setError(null);
    try {
      const API_URL = `https://api.jikan.moe/v4/anime?q=${query}`;
      const response = await axios.get(API_URL);
      setResults(response.data.data);
    } catch (error) {
      setError("Failed to fetch search results.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ DEBOUNCE
  useEffect(() => {
    if (query.length > 2) {
      const delay = setTimeout(() => {
        fetchSearchResults();
      }, 500);

      return () => clearTimeout(delay);
    } else {
      setResults([]); // clear if small query
    }
  }, [query]);

  // ✅ SELECT HANDLER
  const handleSelect = (anime) => {
    navigate(`/anime/${anime.mal_id}`);
    setShowDropdown(false);
  };

  const allResultHandler = () => {
    if (results.length > 0) {
      navigate(`/search?q=${query}`);
      setShowDropdown(false);
    }
  };

  return (
    <div className="w-full max-w-md relative group">
      {/* Input */}
      <div className="relative flex items-center">
        <SearchIcon
          className="absolute left-4 text-slate-500"
          size={20}
        />

        <input
          value={query} // ✅ CONTROLLED
          onChange={inputHandler}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => {
            setTimeout(() => setShowDropdown(false), 150); // ✅ FIX
          }}
          type="text"
          placeholder="Search for animes..."
          className="w-full bg-slate-900/50 border border-slate-800 text-white pl-12 pr-4 py-4 rounded-2xl outline-none"
        />
      </div>

      {/* Hot Buttons */}
      <div className="flex gap-2 mt-3 ml-1">
        {["Naruto", "One Piece", "Solo Leveling"].map((item) => (
          <button
            key={item}
            onClick={() => {
              setQuery(item);
              setShowDropdown(true);
            }}
            className="text-xs text-slate-400 hover:text-amber-400"
          >
            {item}
          </button>
        ))}
      </div>

      {/* States */}
      {loading && <p className="text-sm text-slate-500 mt-2">Loading...</p>}
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

      {/* Dropdown */}
      {showDropdown && results.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border border-slate-800 rounded-md mt-2 p-4 z-10">
          {results.slice(0, 5).map((anime) => (
            <div
              key={anime.mal_id}
              onClick={() => handleSelect(anime)}
              className="flex items-center gap-4 mb-3 cursor-pointer hover:bg-slate-800 p-2 rounded"
            >
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-12 h-16 object-cover rounded-md"
              />
              <div>
                <p className="text-sm font-bold">{anime.title}</p>
                <p className="text-xs text-slate-500">
                  {anime.type} - {anime.status}
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={allResultHandler}
            className="w-full text-center text-sm text-amber-400 hover:bg-gray-700 py-2 rounded-md"
          >
            View all results
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;