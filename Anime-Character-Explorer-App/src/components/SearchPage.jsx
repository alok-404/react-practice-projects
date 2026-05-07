import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AnimeCard from "./AnimeCard";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

  const navigate = useNavigate();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const fetchSearchResults = async () => {
    setLoading(true);
    setError(null);
    try {
      const API_URL = `https://api.jikan.moe/v4/anime?q=${query}&page=${page}`;
      const response = await axios.get(API_URL);
      //   setResults(response.data.data);
      if (response.data.data.length === 0) {
        setHasMore(false);
      }
      setResults((prevResult) => [...prevResult, ...response.data.data]);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Failed to fetch search results. Please try again.");
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    }
  }, [query, page]);

  useEffect(() => {
    setResults([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || isFetchingMore || !hasMore) return;

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setIsFetchingMore(true);
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, isFetchingMore, hasMore]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Results for{" "}
          <span className="text-blue-500 text-opacity-90 italic">
            "{query}"
          </span>
        </h2>
        <p className="text-gray-400 mt-2">{results.length} titles found</p>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-900/20 border border-red-500 text-red-500 p-4 rounded-lg text-center">
          {error}
        </div>
      )}

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
       {results.map((anime) => (
  <AnimeCard key={anime.mal_id} anime={anime} />
))}

{loading &&
  [...Array(10)].map((_, i) => (
    <div
      key={i}
      className="animate-pulse bg-gray-800 rounded-xl h-80 w-full"
    />
  ))}
      </div>

      {/* Empty State */}
      {!loading && !error && results.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">
            No anime found matching your search. Try another keyword!
          </p>
        </div>
      )}

      {/* <button
        className="bg-amber-400 text-black px-6 py-3 rounded-xl font-bold mt-10 flex items-center gap-2 hover:bg-amber-500 transition-colors mx-auto cursor-pointer"
        disabled={loading}
        onClick={() => setPage((prev) => prev + 1)}
      >
        {loading ? "Loading..." : "Load More"}
      </button> */}
    </div>
  );
};

export default SearchPage;
