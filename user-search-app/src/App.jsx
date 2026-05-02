import React, { useEffect, useState } from 'react'
import axios from 'axios' 

const App = () => {

  const [query, setQuery] = useState("") // State to hold the search query
  const [users, setUsers] = useState([]) // State to hold the fetched users
  console.log(query);

    const inputHandler = (value) => {
      console.log("Input Value: ", value)
      setQuery(value) // Update the query state with the input value
      // Call the function to fetch users based on the updated query
    }

    const fetchUsers = async () => {
      try {
        const API_URL = `https://dummyjson.com/users/search?q=${query}`; 
        const response = await axios.get(API_URL); 
        console.log("API Response: ", response.data); 
        console.log(response.data.user);        
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users: ", error); 
      }
    }
    
    useEffect(() => {
      if (query.length > 0) {
        fetchUsers(); 
      } else {
        setUsers([]); 
      }
    }, [query]); 


  return (
  <div className='h-screen w-full bg-slate-100 flex flex-col p-6'>
      {/* Header Section */}
      <h1 className='text-3xl font-black text-gray-800 text-center mb-6 tracking-tight'>
        User Search <span className='text-blue-600'>App</span>
      </h1> 

      {/* Main Container - Divided into 2 Portions */}
      <div className="flex flex-1 w-full bg-white rounded-4xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Left Portion: Search & Filter (50% Width) */}
        <div className="w-1/2 h-full bg-slate-50 border-r border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Filters</h2>
          <input 
            onChange={(e)=>{
              inputHandler(e.target.value)
            }}
            type="text" 
            placeholder='Search users...' 
            className='w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm' 
          />
          <p className="mt-4 text-sm text-gray-400 font-medium">Type a name to start searching</p>
        </div>

        {/* Right Portion: Results (50% Width) */}
        <div className="w-1/2 h-full bg-white p-8 overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Results</h2>
          <div className="flex flex-col items-center justify-center h-[60%]">
             <div className="bg-gray-50 p-6 rounded-3xl text-center">
              {(users.length > 0) ? (
                users.map((user) => (
                  <div key={user.id} className="mb-4">
                    <p className="text-lg font-semibold text-gray-800">{user.firstName} {user.lastName}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                ))
              ) : (
                <div>
                  <p className='text-gray-400 font-bold'>No users found.</p>
                  <span className="text-xs text-gray-300 italic">Try searching for someone else</span>
                </div>
              )}
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App