import { useState } from "react";
import "./PostCard.css";

function PostCard({ post, onSelect }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="postCard">
      <img src={post.url} onClick={() => onSelect(post)} />

      <button onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>
    </div>
  );
}

export default PostCard;