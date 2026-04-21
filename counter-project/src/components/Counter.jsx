import { useState } from "react";
import IncreaseBtn from "./IncreaseBtn";
import DecreaseBtn from "./DecreaseBtn";
import Reset from "./Reset";
import Jump5 from "./Jump5";
import MinusBy5 from "./MinusBy5";

const Counter = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum((prev) => prev + 1);
  }

  function decreaseNum() {
    setNum((prev) => prev - 1);
  }
  function resetNum() {
    setNum(0);
  }
  function plus5Num() {
    setNum((prev) => prev + 5);
  }
  function minus5Num() {
    setNum((prev) => prev - 5);
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col justify-center items-center p-4 font-sans selection:bg-indigo-100">
      {/* Container Card */}
      <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl flex flex-col items-center border border-slate-100 max-w-2xl w-full">
        <span className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-4">
          React Counter
        </span>

        {/* Action Buttons Top Row (+5 / Reset) */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Reset onReset={resetNum} />
          <Jump5 onJump5={plus5Num} />
          <MinusBy5 disabled={num < 5} onMinus={minus5Num} />
        </div>

        {/* Main Number Display */}

        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-slate-800 tabular-nums drop-shadow-sm">
            {num}
          </h1>
        </div>

        {/* Main Increase/Decrease Row */}
        <div className="flex items-center justify-center gap-6 w-full">
          <DecreaseBtn disabled={num === 0} onDecrease={decreaseNum} />
          <IncreaseBtn onIncrease={increaseNum} />
        </div>
      </div>

      {/* Footer hint */}
      <p className="mt-8 text-slate-400 text-sm italic">
        Minimalist Counter UI v2.0
      </p>
    </div>
  );
};

export default Counter;
