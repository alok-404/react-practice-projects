import React, { useState } from "react";

const App = () => {

 const [title, setTitle] = useState("")


  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted by", title);
    setTitle("")
  }
  return (
    <div className="bg-gray-800 h-screen w-screen flex flex-col items-center justify-center">
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className="flex gap-10 flex-col items-center justify-center">
        <input
          className=" w-100 bg-amber-900 p-6 text-2xl"
          type="text"
          placeholder="Enter something"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <button className="w-50 bg-blue-900 p-6 text-2xl">submit</button>
      </form>
    </div>
  );
};

export default App;
