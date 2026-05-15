import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FavouritePage = () => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-8">
        No favorites added yet.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Favorites</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {favorites.map((anime) => (
          <div
            key={anime.mal_id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={anime.image_url} // ✅ FIXED
              alt={anime.title}
              className="w-full h-64 object-cover cursor-pointer"
              onClick={() => navigate(`/anime/${anime.mal_id}`)}
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {anime.title}
              </h3>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => {
                  const updated = favorites.filter(
                    (item) => item.mal_id !== anime.mal_id
                  );
                  setFavorites(updated);
                  localStorage.setItem(
                    "favorites",
                    JSON.stringify(updated)
                  );
                }}
                className="text-red-400 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;