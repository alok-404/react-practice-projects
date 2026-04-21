import React from 'react'

const Jump5 = ({onJump5}) => {
  return (
    <div>

        <button
            onClick={onJump5}
            className="px-6 py-3 bg-indigo-500 text-white font-semibold hover:bg-indigo-600 active:scale-90 transition-all cursor-pointer rounded-full text-sm shadow-md"
          >
            +5
          </button>


    </div>
  )
}

export default Jump5