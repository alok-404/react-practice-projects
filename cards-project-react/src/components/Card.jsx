import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

export const Card = (props) => {
  // console.log(props);

  const [likes, setLikes] = useState(Number(props.likes));
  const [isLiked, setIsLiked] = useState(false);

  const [comments, setComments] = useState(Number(props.comments));


  const [share, setShare] = useState(Number(props.shares));


const handleLikes = () => {
  setLikes(prev => isLiked ? prev - 1 : prev + 1);
  setIsLiked(prev => !prev);
};

const handleComments = () => {
  setComments(prev => prev + 1);
};

const handleShare = () => {
  setShare(prev => prev + 1);
};

  return (
    <div className="card">
      <div className="cover">
        <img src={props.coverImage} alt="" />
      </div>

      <div className="top">
        <img src={props.profileImg} alt="" />
      </div>

      <div className="center">
        <h1>{props.name}</h1>
        <small>{props.description}</small>
      </div>

      <div className="bottom">
        <div className="NumText">
          <h1>{likes}</h1>
          <p>Likes</p>
        </div>

        <div className="NumText">
          <h1>{comments}</h1>
          <p>Comments</p>
        </div>

        <div className="NumText">
          <h1>{share}</h1>
          <p>Shares</p>
        </div>
      </div>

      <div className="buttons">
        <div className="btn" onClick={handleLikes}>
          <Heart color={isLiked ? "red" : "black"}  size={18} />{" "}
        </div>
        <div className="btn" onClick={handleComments}>
          <MessageCircle size={18} />
        </div>
        <div className="btn" onClick={handleShare}>
          <Share2 size={18} />
        </div>
      </div>
    </div>
  );
};
