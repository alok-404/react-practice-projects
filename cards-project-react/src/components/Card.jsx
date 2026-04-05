import { Heart, MessageCircle, Share2 } from 'lucide-react'
import React from 'react'

export const Card = ({props}) => {

  // console.log(props);
  
  return (
    <div className='card'>

      <div className='cover'>
        <img src={props.coverImage} alt=""  />
      </div>

      <div className="top">
        <img src={props.profileImg} alt=""/>
      </div>

      <div className='center'>
        <h1>{props.name}</h1>
        <small>{props.description}</small>
      </div>

      <div className='bottom'>
        <div className='NumText'>
          <h1>{props.likes}</h1>
          <p>Likes</p>
          
        </div>

         <div className='NumText'>
          <h1>{props.comments}</h1>
          <p>Comments</p>
        </div>

         <div className='NumText'>
          <h1>{props.shares}</h1>
          <p>Shares</p>
        </div>
      </div>

        <div className='buttons'>
        <div className='btn'><Heart size={18} /> </div>
        <div className='btn'><MessageCircle size={18} /></div>
        <div className='btn'><Share2 size={18} /></div>
      </div>



    </div>
  )
}
