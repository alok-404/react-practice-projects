import React from "react";
import { AlertCircle, Play, Star, Zap } from "lucide-react";
import NavBar from "./NavPage/NavBar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { AnimeDetail } from "./components/AnimeDetail";
import SearchPage from "./components/SearchPage";
import FavouritePage from "./components/FavouritePage";

const App = () => {
 
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8 font-sans">
      {/* Header Section */}
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetail  />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavouritePage />} />
      </Routes>
    </div>
  );
};

export default App;
