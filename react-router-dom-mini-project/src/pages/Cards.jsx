import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";

export const Cards = () => {
  const dummyData = [
    {
      name: "Aarav Sharma",
      role: "Full Stack Developer",
      desc: "Creating pixel-perfect interfaces and robust backend systems.",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format",
      cover: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format",
      stats: { l: "1.2k", c: "84", s: "12" }
    },
    {
      name: "Sanya Malhotra",
      role: "UI/UX Designer",
      desc: "Minimalist design enthusiast. Making the web beautiful.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format",
      cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format",
      stats: { l: "850", c: "42", s: "09" }
    },
    {
      name: "Rohan Varma",
      role: "Product Manager",
      desc: "Bridging the gap between business goals and tech reality.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format",
      cover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format",
      stats: { l: "2.5k", c: "156", s: "45" }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {dummyData.map((user, i) => (
          <div key={i} className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
            
            {/* Cover Image */}
            <div className="h-40 w-full relative overflow-hidden bg-gray-200">
              <img src={user.cover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="cover" />
              <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Content Section */}
            <div className="px-8 pb-8 relative">
              
              {/* Profile Pic */}
              <div className="absolute -top-12 left-60">
                <div className="p-1 bg-white rounded-[1.8rem] shadow-lg">
                  <img src={user.img} className="w-24 h-24 rounded-[1.6rem] object-cover" alt="profile" />
                </div>
              </div>

              {/* User Identity */}
              <div className="mt-16">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-none">{user.name}</h2>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mt-2 block">{user.role}</span>
                <p className="text-gray-500 text-sm mt-4 font-medium leading-relaxed">{user.desc}</p>
              </div>

              {/* Stats Grid */}
              <div className="flex items-center justify-between mt-8 py-6 border-y border-gray-50">
                <div className="text-center">
                  <p className="text-xl font-black text-gray-900">{user.stats.l}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Followers</p>
                </div>
                <div className="h-8 w-px bg-gray-100"></div>
                <div className="text-center">
                  <p className="text-xl font-black text-gray-900">{user.stats.c}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Projects</p>
                </div>
                <div className="h-8 w-px bg-gray-100"></div>
                <div className="text-center">
                  <p className="text-xl font-black text-gray-900">{user.stats.s}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Rank</p>
                </div>
              </div>

              {/* Dummy Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-gray-100">
                  View Profile
                </button>
                <button className="px-5 bg-gray-50 text-gray-400 rounded-2xl hover:bg-gray-100 transition-all border border-gray-100">
                  <MessageCircle size={20} />
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};