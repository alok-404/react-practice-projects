import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !detail.trim()) return; // Khali note add nahi hoga

    setTask([...task, { title, detail }]);
    setTitle("");
    setDetail("");
  };

  const deleteHandler = (idx) => {
    const copyTasks = [...task];
    copyTasks.splice(idx, 1);
    setTask(copyTasks);
  };

  return (
    <div className='flex flex-col md:flex-row h-screen w-full font-sans bg-gray-100'>
      
      {/* LEFT SIDE: Form Section */}
      <div className="left w-full md:w-1/3 bg-white p-8 shadow-lg flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
        <h1 className='text-3xl font-bold mb-8 text-gray-800'>Create Note</h1>
        
        <form onSubmit={submitHandler} className='flex flex-col gap-6'>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-200 focus:border-blue-500 outline-none p-3 text-lg rounded-lg transition-all'
            type="text"
            placeholder='Note Title...'
          />
          
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className='border-2 border-gray-200 focus:border-blue-500 outline-none p-3 text-lg rounded-lg h-40 resize-none transition-all'
            placeholder='Write your thoughts here...'
          ></textarea>
          
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md'>
            Add to List
          </button>
        </form>
      </div>

      {/* RIGHT SIDE: Notes Display Section */}
      <div className='w-full md:w-2/3 h-full overflow-y-auto p-8'>
        <h2 className='text-2xl font-semibold mb-6 text-gray-700'>Your Notes</h2>
        
        <div className="flex flex-row flex-wrap gap-6">
          {task.length > 0 ? (
            task.map(function(elem, idx) {
              return (
                <div key={idx} className="note-card relative w-full sm:w-64 bg-yellow-50 p-5 rounded-xl shadow-sm border border-yellow-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 wrap-break-words mb-2 leading-tight'>{elem.title}</h3>
                    <p className='text-gray-700 wrap-break-words text-sm mb-4 leading-relaxed'>{elem.detail}</p>
                  </div>
                  
                  <button 
                    onClick={() => deleteHandler(idx)}
                    className='text-red-500 hover:bg-red-50 text-xs font-bold py-1 px-2 rounded border border-red-200 self-end transition-colors'
                  >
                    DELETE
                  </button>
                </div>
              );
            })
          ) : (
            <p className='text-gray-400 italic'>Koi notes nahi hain. Kuch add kijiye!</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default App;