import PostCard from "./PostCard";
import "./Trending.css";

function Trending({ posts, onSelect }) {
  return (
    <div className="trending">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default Trending;