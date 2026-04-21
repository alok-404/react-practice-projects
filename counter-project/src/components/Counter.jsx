import React from "react";
import { useState } from "react";

const Counter = () => {

    const [num, setNum] = useState(0)


    function increaseNum(){
        setNum(num+1)
    }

    function decreaseNum(){
      if(num > 0){
        setNum(num-1)
        }
        else{
         alert("Negative nahi ja shkta hoon bhai!")
        }
    }


  return <div className="text-9xl text-center h-screen w-full bg-amber-200 flex flex-col justify-center items-center">
    <h1 className="h-35 w-100 bg-blue-300 ">{num}</h1>
    <div className="btn flex  items-center justify-center gap-50 mt-10">
    <button onClick={decreaseNum} className="p-5 bg-red-500 hover:bg-red-600 active:scale-95 cursor-pointer rounded-2xl">Decrease</button>
        <button onClick={increaseNum} className="p-5 bg-green-500 hover:bg-green-600 active:scale-95 cursor-pointer rounded-2xl">Increase</button>
    </div>
  </div>;
};

export default Counter;
