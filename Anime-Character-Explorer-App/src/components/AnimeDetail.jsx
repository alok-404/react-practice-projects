import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BookHeartIcon,
  BookOpen,
  ChevronLeft,
  Clock,
  HeartCrackIcon,
  HeartIcon,
  HeartXIcon,
  Info,
  LucideKey,
  Star,
  Tv,
} from "lucide-react";

export const AnimeDetail = () => {
  const [animeDetail, setAnimeDetail] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 const [favorites, setFavorites] = useState(() => {
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const cached = localStorage.getItem(`anime_${id}`);

        if (cached) {
          setAnimeDetail(JSON.parse(cached));
        } else {
          const res = await axios.get(
            `https://api.jikan.moe/v4/anime/${id}/full`,
          );

          setAnimeDetail(res.data.data);

          localStorage.setItem(`anime_${id}`, JSON.stringify(res.data.data));
        }
      } catch (error) {
        setError("Failed to fetch anime details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); // for loading delay
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/characters`,
        );
        setCharacters(res.data.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    fetchCharacters();
  }, [id]);

 // ✅ ADD / REMOVE HANDLER
const favouriteHandler = () => {
  if (!animeDetail) return;

  const exists = favorites.find(
    (item) => item.mal_id === animeDetail.mal_id
  );

  if (exists) {
    // remove
    setFavorites(
      favorites.filter((item) => item.mal_id !== animeDetail.mal_id)
    );
  } else {
    // add
    const newFav = {
      mal_id: animeDetail.mal_id,
      title: animeDetail.title,
      image_url: animeDetail.images.jpg.large_image_url,
    };

    setFavorites([...favorites, newFav]);
  }
};

  // ✅ CHECK IF FAV
const isFav = animeDetail
  ? favorites.some((item) => item.mal_id === animeDetail.mal_id)
  : false;

// ✅ SYNC WITH LOCALSTORAGE
useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites])



  if (loading)
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-6 text-center">
        <p className="text-red-400 font-bold text-xl">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-amber-400/10 text-amber-400 rounded-full border border-amber-400/20 hover:bg-amber-400/20 transition-all uppercase tracking-widest text-xs font-bold"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans pb-20 selection:bg-amber-400/30">
      {animeDetail && (
        <>
          {/* Hero Backdrop */}
          <div className="relative h-[35vh] md:h-[50vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent z-10" />
            <img
              src={animeDetail.images.jpg.large_image_url}
              className="w-full h-full object-cover blur-2xl opacity-40 scale-110"
              alt="backdrop"
            />

            <button
              onClick={() => navigate(-1)}
              className="absolute top-6 left-6 z-20 p-3 bg-white/5 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all border border-white/10 shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-50 md:-mt-60 relative z-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left: Poster & Sidebar Stats */}
              <div className="w-full lg:w-72 xl:w-80 shrink-0">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border-4 border-[#1e293b] aspect-3/4 max-w-sm mx-auto lg:max-w-none">
                  <img
                    src={animeDetail.images.jpg.large_image_url}
                    alt={animeDetail.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stats Grid */}
                <div className="mt-6 grid grid-cols-3 lg:grid-cols-2 gap-3">
                  <div className="bg-[#1e293b]/80 p-3 rounded-2xl text-center border border-white/5">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                      Score
                    </p>
                    <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-lg">
                      <Star size={14} fill="currentColor" />{" "}
                      {animeDetail.score || "N/A"}
                    </div>
                  </div>
                  <div className="bg-[#1e293b]/80 p-3 rounded-2xl text-center border border-white/5">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                      Rank
                    </p>
                    <p className="text-white font-black text-lg">
                      #{animeDetail.rank || "N/A"}
                    </p>
                  </div>
                  <div className="bg-[#1e293b]/80 p-3 rounded-2xl text-center border border-white/5">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                      Year
                    </p>
                    <p className="text-red-400 font-black text-lg">
                      {animeDetail.year || "N/A"}
                    </p>
                  </div>
                </div>

                {/* Character Section - Moved under poster for Desktop, kept in flow for Mobile */}
                <div className="mt-10 hidden lg:block">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-amber-400 rounded-full"></span>{" "}
                    Characters
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {characters.slice(0, 6).map((char) => (
                      <div
                        key={char.character.mal_id}
                        className="group cursor-pointer"
                      >
                        <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#1e293b] group-hover:border-amber-400/50 transition-colors">
                          <img
                            src={char.character.images.jpg.image_url}
                            alt={char.character.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-[10px] mt-1 text-slate-400 truncate text-center">
                          {char.character.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Info Section */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {animeDetail.genres.map((genre) => (
                    <span
                      key={genre.mal_id}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-white">
                  {animeDetail.title}
                </h1>

                <button
                  onClick={favouriteHandler}
                  className="bg-amber-400  text-black px-6 py-3 cursor-pointer active:scale-95 rounded-xl font-bold mt-4 flex items-center gap-2 hover:bg-amber-500 transition-colors absolute right-0 top-0 m-6"
                >
                  {isFav ? (
                    <>
                      <HeartCrackIcon fill="red" stroke="red" />
                      Remove from Favorites
                    </>
                  ) : (
                    <>
                      <HeartIcon fill="red" stroke="red" />
                      Add to Favorites
                    </>
                  )}
                </button>

                {/* Meta Data */}
                <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-slate-300">
                  <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-1.5 rounded-full border border-white/5">
                    <Tv size={16} className="text-amber-400" />
                    <span className="text-xs font-bold uppercase">
                      {animeDetail.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-1.5 rounded-full border border-white/5">
                    <Clock size={16} className="text-amber-400" />
                    <span className="text-xs font-bold uppercase">
                      {animeDetail.episodes} Eps
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-1.5 rounded-full border border-white/5">
                    <BookOpen size={16} className="text-amber-400" />
                    <span className="text-xs font-bold uppercase">
                      {animeDetail.status}
                    </span>
                  </div>
                </div>

                {/* Trailer Section */}
                {animeDetail.trailer?.embed_url && (
                  <div className="w-full aspect-video rounded-3xl overflow-hidden border-4 border-[#1e293b] shadow-2xl mt-4">
                    <iframe
                      src={animeDetail.trailer.embed_url}
                      title="Anime Trailer"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Synopsis Card */}
                <div className="bg-[#1e293b]/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 md:p-8 mt-8 shadow-inner">
                  <div className="flex items-center gap-3 mb-4">
                    <Info size={20} className="text-amber-400" />
                    <h3 className="text-xl font-bold">Synopsis</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-base md:text-lg opacity-90 font-light">
                    {animeDetail.synopsis ||
                      "No synopsis available for this title."}
                  </p>
                </div>

                {/* Mobile-only Characters Grid */}
                <div className="mt-10 lg:hidden">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-amber-400 rounded-full"></span>{" "}
                    Characters
                  </h2>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                    {characters.slice(0, 8).map((char) => (
                      <div
                        key={char.character.mal_id}
                        className="flex flex-col items-center gap-2"
                      >
                        <img
                          src={
                            char.character.images?.jpg?.image_url ||
                            "https://via.placeholder.com/150x200?text=No+Image"
                          }
                          alt={char.character.name}
                          className="w-16 h-16 rounded-2xl object-cover border-2 border-[#1e293b]"
                        />
                        <p className="text-[10px] text-center text-slate-400 truncate w-full">
                          {char.character.name.split(",")[0]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
