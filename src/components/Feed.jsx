import Post from "./Post";
import "./Feed.css";

function Feed({ posts, onSelectPost }) {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} onSelect={onSelectPost} />
      ))}
    </div>
  );
}

export default Feed;