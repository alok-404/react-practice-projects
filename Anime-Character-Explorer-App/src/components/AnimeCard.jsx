import React from 'react'
import { useNavigate } from 'react-router-dom';

const AnimeCard = ({anime}) => {

    const navigate = useNavigate()
  return (
     <div
                onClick={() => {
                  navigate(`/anime/${anime.mal_id}`);
                }}
                key={anime.mal_id}
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
              >
                {/* Score Badge */}
                <div className="absolute top-2 right-2 z-10 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md text-yellow-400 font-bold text-xs border border-yellow-400/30">
                  ★ {anime.score || "N/A"}
                </div>

                {/* Image Container */}
                <div className="relative aspect-3/4 overflow-hidden">
                  <img
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-xs text-gray-200 line-clamp-3">
                      {anime.synopsis || "No synopsis available."}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-sm font-bold truncate group-hover:text-blue-400 transition-colors">
                    {anime.title}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                      {anime.type}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {anime.episodes ? `${anime.episodes} EPS` : "Ongoing"}
                    </span>
                  </div>
                </div>
              </div>
  )
}

export default AnimeCard