import React from 'react'

const IncreaseBtn = ({onIncrease}) => {
    

  
  return (
    <div>
        <button
            onClick={onIncrease}
            className="flex-1 p-5 bg-emerald-500 text-white font-bold text-xl hover:bg-emerald-600 active:scale-95 transition-all cursor-pointer rounded-4xl shadow-lg hover:shadow-emerald-200"
          >
            Increase
          </button>
    </div>
  )
}

export default IncreaseBtn