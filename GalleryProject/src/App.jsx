import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  // console.log(photos);

 useEffect(() => {
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${pageIndex}&limit=12`
      );
      setPhotos(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  getData();
}, [pageIndex]);


  const goToNextPage = () => setPageIndex((prev) => prev + 1);
  const goToPrevPage = () => setPageIndex((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-2">
            Photo Gallery
          </h1>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            <h1 className="absolute top-1/2 left-1/2 translateX-1/2 translateY-1/2">Loading...</h1>
          ) : (
            photos.map(function (photo) {
              return (
                <div
                  key={photo.id}
                  className="group flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                    <img
                      src={photo.download_url}
                      alt={photo.author}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                      Photographer
                    </p>
                    <h3 className="text-lg font-semibold text-slate-800 truncate">
                      {photo.author}
                    </h3>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            disabled={pageIndex === 1}
            onClick={goToPrevPage}
            className={`w-full sm:w-auto px-10 py-3 bg-white text-slate-700 font-bold rounded-xl border-2 border-slate-200 hover:border-blue-500 transition-colors active:scale-95 
    ${pageIndex === 1 ? "opacity-30 cursor-not-allowed" : "opacity-100"}`}
          >
            Prev
          </button>

          <span className="text-slate-500 font-medium order-first sm:order-none mb-4 sm:mb-0">
            Page <span className="text-slate-900 font-bold">{pageIndex}</span>
          </span>

          <button
            disabled={loading}
            onClick={() => {
              goToNextPage();
            }}
            className={`w-full sm:w-auto px-10 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg active:scale-95`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
