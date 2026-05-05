import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BookOpen, ChevronLeft, Clock, Info, Star, Tv } from "lucide-react";
// import { Star, Clock, TV, BookOpen, ChevronLeft, Info } from "lucide-react";

export const AnimeDetail = () => {
  const [animeDetail, setAnimeDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnimeDetail(res.data.data);
      } catch (error) {
        setError("Failed to fetch anime details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  // --- ONLY UI UPDATED BELOW ---

  if (loading) return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-6">
      <p className="text-red-400 font-bold text-xl">{error}</p>
      <button onClick={() => navigate(-1)} className="mt-4 text-amber-400 underline uppercase tracking-widest text-xs">Go Back</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans pb-20">
      {animeDetail && (
        <>
          {/* Hero Backdrop */}
          <div className="relative h-[40vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent z-10" />
            <img 
              src={animeDetail.images.jpg.large_image_url} 
              className="w-full h-full object-cover blur-xl opacity-30 scale-110" 
              alt="backdrop" 
            />
            
            {/* Back Button */}
            <button 
              onClick={() => navigate(-1)}
              className="absolute top-8 left-8 z-20 p-3 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all border border-white/10"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Main Content Container */}
          <div className="max-w-6xl mx-auto px-6 -mt-40 relative z-20">
            <div className="flex flex-col md:flex-row gap-10">
              
              {/* Left: Poster Card */}
              <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border-4 border-[#1e293b]">
                  <img 
                    src={animeDetail.images.jpg.large_image_url} 
                    alt={animeDetail.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* Quick Stats Below Poster */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-[#1e293b] p-4 rounded-3xl text-center">
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Score</p>
                    <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-xl">
                      <Star size={18} fill="currentColor" /> {animeDetail.score || "N/A"}
                    </div>
                  </div>
                  <div className="bg-[#1e293b] p-4 rounded-3xl text-center">
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Rank</p>
                    <p className="text-white font-black text-xl">#{animeDetail.rank || "N/A"}</p>
                  </div>
                </div>
              </div>

              {/* Right: Info Section */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {animeDetail.genres.map((genre) => (
                    <span key={genre.mal_id} className="px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                      {genre.name}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-white">
                  {animeDetail.title}
                </h1>

                {/* Secondary Meta Data */}
                <div className="flex flex-wrap gap-6 mb-10 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Tv size={18} className="text-amber-400" />
                    <span className="text-sm font-bold">{animeDetail.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-amber-400" />
                    <span className="text-sm font-bold">{animeDetail.episodes} Episodes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-amber-400" />
                    <span className="text-sm font-bold capitalize">{animeDetail.status}</span>
                  </div>
                </div>

                {/* Synopsis Card */}
                <div className="bg-[#1e293b]/50 backdrop-blur-sm border border-slate-800 rounded-[2.5rem] p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Info size={20} className="text-amber-400" />
                    <h3 className="text-xl font-bold">Synopsis</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg font-medium opacity-80">
                    {animeDetail.synopsis || "No synopsis available for this title."}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </div>
  );
};