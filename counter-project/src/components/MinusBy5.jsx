import React from "react";

const MinusBy5 = ({ onMinus, disabled }) => {
  return (
    <div>
      <button
        onClick={onMinus}
        disabled={disabled}
        className={`px-6 py-3 font-semibold rounded-full text-sm shadow-md transition-all ${
          disabled
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-amber-500 text-white hover:bg-amber-600 active:scale-90 cursor-pointer"
        }`}
      >
        -5
      </button>
    </div>
  );
};

export default MinusBy5;
