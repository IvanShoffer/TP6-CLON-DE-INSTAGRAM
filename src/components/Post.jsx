import { useState } from "react";
import "./Post.css";

function Post({ post, onSelect }) {
  const [likes, setLikes] = useState(post.likes);

  return (
    <div className="post">
      <h4>{post.user}</h4>

      <img
        src={post.image}
        alt="cat"
        onClick={() => onSelect(post)}
      />

      <p>{post.caption}</p>

      <button onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>
    </div>
  );
}

export default Post;