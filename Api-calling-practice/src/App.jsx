import React, { useState } from 'react'
import axios from "axios";

const App = () => {
  const [user, setUser] = useState([])
  const [currentIndex , setCurrentIndex] = useState(0)

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/users")
    const data = response.data.users;
    setUser(data)
    setCurrentIndex(0)
  }
  // console.log(user);

  const showNextUser = () => {
    setCurrentIndex(prev => prev + 1)
  }
  

if (user.length === 0) {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
      <button onClick={getData} className="bg-cyan-500 p-4 rounded-xl font-bold">
        Click to load data
      </button>
    </div>
  );
}


   return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 font-sans">
      
      {/* CARD CONTAINER */}
      <div className="relative group w-full max-w-[380px]">
        
        {/* Glow Effect behind card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        <div className="relative bg-[#1e293b] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Cover Section */}
          <div className="h-28 bg-gradient-to-br from-slate-800 to-slate-900 flex items-end justify-center">
             {/* Profile Image Circle */}
             <div className="w-24 h-24 rounded-full border-4 border-[#1e293b] bg-slate-700 -mb-12 overflow-hidden shadow-xl">
                <img 
                  src={user[currentIndex]?.image}
                  alt="user" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Content Section */}
          <div
          
          className="pt-16 pb-10 px-8 text-center">
            <h2 className="text-2xl font-bold text-white tracking-tight">{user[currentIndex]?.firstName}</h2>
            <p className="text-cyan-400 font-medium text-sm mb-6">{user[currentIndex]?.lastName}</p>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">Email Address</p>
                <p className="text-slate-200 text-sm truncate">{user[currentIndex]?.email}</p>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-left">
                   {/* <p className="text-slate-400 text-[10px] uppercase font-bold">{user[currentIndex].location}</p> */}
                   <p className="text-slate-200 text-sm">{user[currentIndex]?.firstName}</p>
                </div>
                <div className="flex-1 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-left">
                   <p className="text-slate-400 text-[10px] uppercase font-bold">Gender</p>
                   <p className="text-slate-200 text-sm">{user[currentIndex]?.gender}</p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-3">
              <button
              onClick={getData}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#0f172a] font-black py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95">
                GET NEW DATA
              </button>
              
              <button
              onClick={showNextUser}
              className="w-full bg-slate-700/50 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl border border-slate-600 transition-all flex items-center justify-center gap-2">
                Show Next User
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App