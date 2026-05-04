import React from 'react'

const SkeletonCard = () => {
  return (
    <div className="bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 animate-pulse">
      <div className="aspect-3/4 bg-slate-800" />

      <div className="p-5 space-y-3">
        <div className="h-4 bg-slate-800 rounded w-3/4"></div>
        <div className="h-4 bg-slate-800 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard

