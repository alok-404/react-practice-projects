import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const inputHandler = (value) => {
    setQuery(value);
      setError(null);
  };

const fetchUsers = async (searchQuery) => {
  if (!searchQuery) return;

  setIsLoading(true);
  setError(null);

  try {
    const API_URL = `https://dummyjson.com/users/search?q=${searchQuery}`;
    const response = await axios.get(API_URL);
    setUsers(response.data.users);
  } catch (error) {
    console.error("Error fetching users: ", error);
    setError("Failed to fetch users. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      fetchUsers(debouncedQuery);
    } else {
      setUsers([]);
    }
  }, [debouncedQuery]);

  return (
    <div className="h-screen w-full bg-slate-50 flex flex-col p-6 font-sans">
      {/* Header Section */}
      <h1 className="text-4xl font-black text-gray-900 text-center mb-8 tracking-tighter">
        User Search <span className="text-blue-600">Engine</span>
      </h1>

      {/* Main Container */}
      <div className="flex flex-1 w-full bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Left Portion: Search & Filter (50%) */}
        <div className="w-1/2 h-full bg-slate-50/50 border-r border-gray-100 p-10">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-black text-gray-800 mb-6">Filters</h2>
            
            <div className="relative">
              <input
                onChange={(e) => inputHandler(e.target.value)}
                type="text"
                placeholder="Search by name, email..."
                className="w-full p-5 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm bg-white text-gray-700"
              />
              {query.length > 0 && (
                <span className="absolute right-4 top-5 text-[10px] font-black uppercase tracking-widest text-blue-500 animate-pulse">
                  Typing...
                </span>
              )}
            </div>
            
            <p className="mt-4 text-xs text-gray-400 font-bold uppercase tracking-widest ml-1">
              Real-time Database Search
            </p>
          </div>
        </div>

        {/* Right Portion: Results (50%) */}
        <div className="w-1/2 h-full bg-white flex flex-col">
          <div className="p-10 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-2xl font-black text-gray-800">Results</h2>
            {users.length > 0 && (
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                {users.length} found
              </span>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-10">
            <div className="grid gap-4">
              {/* 1. Initial State */}
              {query.length === 0 && (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <p className="text-gray-300 font-black text-xl italic uppercase tracking-tighter">Start typing to explore...</p>
                </div>
              )}

              {/* 2. Loading State */}
              {query.length > 0 && isLoading && (
                <div className="flex items-center justify-center h-64">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* 3. Success State */}
              {!isLoading && users.length > 0 && users.map((user) => (
                <div key={user.id} className="p-5 rounded-2xl border border-gray-50 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-black">
                      {user.firstName[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-sm text-gray-400 font-medium">{user.email}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* 4. No Results State */}
              {!isLoading && query.length > 0 && users.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No users found in records </p>
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;