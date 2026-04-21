import React from "react";

const DecreaseBtn = ({ onDecrease, disabled}) => {
    
  return (
    
    <div>
      <button
        onClick={onDecrease}
        disabled={disabled}
        className={`flex-1 p-5 rounded-4xl font-bold text-xl transition-all shadow-lg ${
          disabled
            ? "bg-slate-100 text-slate-300 cursor-not-allowed shadow-none"
            : "bg-rose-500 text-white hover:bg-rose-600 active:scale-95 cursor-pointer hover:shadow-rose-200"
        }`}
      >
        Decrease
      </button>
    </div>
  );
};

export default DecreaseBtn;
