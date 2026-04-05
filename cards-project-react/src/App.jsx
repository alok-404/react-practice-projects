import React from 'react'
import { Card } from './components/Card'

const App = () => {

  const profileDescription = [
  {
    "coverImage": "https://images.unsplash.com/photo-1631479290037-97d776982ea4?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "profileImg": "https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Aarav Sharma",
    "description": "Tech enthusiast and full-stack developer sharing coding tips.",
    "likes": "83.4K",
    "comments": "12.7K",
    "shares": "9.3K"
  },
  {
    "coverImage": "https://i.pinimg.com/1200x/87/b1/d1/87b1d17bb072e98281415bf24e6abf99.jpg",
    "profileImg": "https://i.pinimg.com/736x/46/4a/b6/464ab653750fefd3153237f7059c7afe.jpg",
    "name": "Riya Verma",
    "description": "Lifestyle blogger documenting travel and daily inspiration.",
    "likes": "56.2K",
    "comments": "8.9K",
    "shares": "6.1K"
  },
  {
    "coverImage": "https://i.pinimg.com/736x/86/a1/7c/86a17c46a3c25ec5fab04e313e78a7f1.jpg",
    "profileImg": "https://i.pinimg.com/736x/cc/7b/30/cc7b3025d6bad7fd81b14908e1cb40c8.jpg",
    "name": "Kabir Khan",
    "description": "Fitness coach helping you build strength and discipline.",
    "likes": "91.8K",
    "comments": "15.4K",
    "shares": "11.6K"
  },
  {
    "coverImage": "https://i.pinimg.com/736x/4e/c5/74/4ec5743e7eee9004fb6960521ca67316.jpg",
    "profileImg": "https://i.pinimg.com/736x/16/83/09/1683093aba090c09e2662991d28e0b81.jpg",
    "name": "Meera Iyer",
    "description": "Food lover exploring street food and homemade recipes.",
    "likes": "67.5K",
    "comments": "10.2K",
    "shares": "7.8K"
  },
  {
    "coverImage": "https://i.pinimg.com/736x/86/a1/7c/86a17c46a3c25ec5fab04e313e78a7f1.jpg",
    "profileImg": "https://i.pinimg.com/736x/46/77/71/467771776f963b10bd0d400eaf5192a6.jpg",
    "name": "Arjun Patel",
    "description": "Entrepreneur sharing startup insights and business hacks.",
    "likes": "74.1K",
    "comments": "13.6K",
    "shares": "10.4K"
  },
      {
      coverImage:
        "https://images.unsplash.com/photo-1631479290037-97d776982ea4?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileImg:
        "https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aarav Sharma",
      description:
        "Tech enthusiast and full-stack developer sharing coding tips.",
      likes: "83.4K",
      comments: "12.7K",
      shares: "9.3K",
    }
]


  return (
    <div className='parent'>
      {profileDescription.map((elem,idx)=>{
        
         return <div key={idx}>
          <Card coverImage={elem.coverImage} profileImg={elem.profileImg} description={elem.description} name={elem.name} likes={elem.likes} comments={elem.comments} shares={elem.shares} />
         </div>
      })}
    </div>
  )
}

export default App