import React, { useEffect, useState } from 'react'
import { AlertCircle, Play, Star, Zap } from "lucide-react";
import SkeletonCard from "./SkeletonCard";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();

 const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAnime = async () => {
    setLoading(true);
    setError(null);
    try {
      const API_URL = "https://api.jikan.moe/v4/top/anime";
      const res = await axios.get(API_URL);
      // console.log(res.data.data);
      setAnime(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
      setAnime([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAnime();
    console.log("api_hit_ho_chuki_hai");
  }, []);



  return (
        <div className="max-w-7xl mx-auto">
        {/* CONDITION 1: Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : error ? (
          /* CONDITION 2: Error State */
          <div className="w-full py-32 border-2 border-dashed border-red-900/30 rounded-[3rem] flex flex-col items-center justify-center text-red-500/50">
            <AlertCircle size={48} className="mb-4 opacity-40" />
            <p className="font-black text-xl uppercase tracking-widest">
              {error}
            </p>
          </div>
        ) : anime.length === 0 ? (
          /* CONDITION 3: Empty State */
          <div className="w-full py-32 border-2 border-dashed border-slate-800 rounded-[3rem] flex flex-col items-center justify-center text-slate-700">
            <div className="bg-slate-800/30 p-8 rounded-full mb-4">
              <Play size={48} className="opacity-20" />
            </div>
            <p className="font-black text-2xl uppercase tracking-widest opacity-30">
              No Anime Found
            </p>
          </div>
        ) : (
          /* CONDITION 4: Success State (Anime Grid) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {anime.map((item) => (
              <div
              onClick={() => navigate(`/anime/${item.mal_id}`)}
                key={item.mal_id}
                className="group cursor-pointer active:scale-90 bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-3/4 overflow-hidden">
                  <img
                    src={item.images.jpg.large_image_url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs font-black text-amber-400">
                      {item.score}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="text-lg font-bold leading-tight line-clamp-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h2>
                  <div className="mt-auto pt-4 flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <span>{item.type}</span>
                    <span>{item.episodes || "??"} eps</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
  )
}

export default Home