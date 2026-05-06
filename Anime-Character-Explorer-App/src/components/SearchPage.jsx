import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('q')

    const [results, setResults] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)  


    const fetchSearchResults = async () => {
        setLoading(true);
        setError(null)
        try {
            const API_URL = `https://api.jikan.moe/v4/anime?q=${query}`
            const response = await axios.get(API_URL)
            setResults(response.data.data)
        }
        catch (error) {
            console.error('Error fetching search results:', error)
            setError('Failed to fetch search results. Please try again.')
        }  
        finally {
            setLoading(false)
        } 
        
    }

        useEffect(() => {
            if (query) {
                fetchSearchResults()
            }
        }, [query])



        return (
        <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-10">
                <h2 className="text-4xl font-extrabold tracking-tight">
                    Results for <span className="text-blue-500 text-opacity-90 italic">"{query}"</span>
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
                {loading ? (
                    // Skeleton Loaders
                    [...Array(10)].map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-800 rounded-xl h-80 w-full" />
                    ))
                ) : (
                    results.map((anime) => (
                        <div 
                            key={anime.mal_id} 
                            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
                        >
                            {/* Score Badge */}
                            <div className="absolute top-2 right-2 z-10 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md text-yellow-400 font-bold text-xs border border-yellow-400/30">
                                ★ {anime.score || 'N/A'}
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img 
                                    src={anime.images.jpg.large_image_url} 
                                    alt={anime.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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
                                        {anime.episodes ? `${anime.episodes} EPS` : 'Ongoing'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Empty State */}
            {!loading && !error && results.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-xl">No anime found matching your search. Try another keyword!</p>
                </div>
            )}
        </div>
    );
};

export default SearchPage;