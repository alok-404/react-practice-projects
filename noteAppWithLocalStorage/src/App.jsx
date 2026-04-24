import React, { useEffect } from "react";
import { useState } from "react";
import notePaper from "./assets/book.png"
const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [task, setTask] = useState(() => {
    const saveNotes = localStorage.getItem("notes");
    return saveNotes ? JSON.parse(saveNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(task));
  }, [task]);


  const editHandler = (index) => {
    const itemToEdit = task[index];
    setTitle(itemToEdit.title);
    setDetail(itemToEdit.detail);
    setEditIndex(index);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !detail.trim()) return;

    if (editIndex !== null) {
      const updateNote = [...task];
      updateNote[editIndex] = { title, detail };
      setTask(updateNote);
      setEditIndex(null)
    } else {
      const newTask = { title, detail };
      setTask([...task, newTask]);
    }

    setTitle("");
    setDetail("");
  };

  const deleteHandler = (index) => {
    const filteredTasks = task.filter((_, i) => i !== index);
    setTask(filteredTasks);
  };


  return (
    <div className="min-h-screen w-full bg-[#f8fafc] font-sans flex flex-col md:flex-row">
      {/* LEFT SIDE: Input Panel (Sticky on Desktop) */}
      <aside className="w-full md:w-87.5 lg:w-100 bg-white border-r border-slate-200 p-8 flex flex-col shadow-sm md:h-screen md:sticky md:top-0">
        <div className="mb-10">
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Quick Notes
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Apne ideas ko organize karein.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="group">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1 mb-2 block">
              Title
            </label>
            <input
              className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none p-3 rounded-xl transition-all text-slate-700"
              type="text"
              placeholder="Note ka title..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="group">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1 mb-2 block">
              Description
            </label>
            <textarea
              className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none p-3 rounded-xl h-48 resize-none transition-all text-slate-700"
              placeholder="Kuch detail likhein..."
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            ></textarea>
          </div>

          <button
            onClick={(e) => {
              submitHandler(e);
            }}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
          >
            <span>{editIndex !== null ? "Update Note" : "Save Note"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </aside>

      {/* RIGHT SIDE: Notes Display Area */}
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-800">Your Collection</h2>
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
            {task.length} notes
          </span>
        </div>

        {/* Notes Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* --- SINGLE NOTE UI START (Isse map ke andar rkhna) --- */}
          {task.length > 0 ? (
            task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  style={{ backgroundImage: `url(${notePaper})`, backgroundSize: 'cover' }}
                  className="group  p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-1 w-12 bg-indigo-500 rounded-full mb-4"></div>
                    <h3 className="text-lg font-bold text-slate-800 wrap-break-words mb-2 group-hover:text-indigo-600 transition-colors">
                      {elem.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                      {elem.detail}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-50 flex justify-end gap-3">
                    {/* EDIT BUTTON */}
                    <button
                      onClick={() => editHandler(idx)}
                      className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                      title="Edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>

                    {/* DELETE BUTTON */}
                    <button
                      onClick={() => {
                        deleteHandler(idx);
                      }}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      title="Delete"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Koi note nahi hai</p>
          )}

          {/* --- SINGLE NOTE UI END --- */}
        </div>
      </main>
    </div>
  );
};

export default App;
