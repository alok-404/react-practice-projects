import React from 'react'

const Reset = ({onReset}) => {
  return (
    <div>

          <button
            onClick={onReset}
            className="px-6 py-3 bg-slate-800 text-white font-semibold hover:bg-slate-900 active:scale-90 transition-all cursor-pointer rounded-full text-sm shadow-md"
          >
            Reset
          </button>

    </div>
  )
}

export default Reset