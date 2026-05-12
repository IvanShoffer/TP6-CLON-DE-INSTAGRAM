import "./PostDetail.css";

function PostDetail({ post, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>X</button>
        <h3>{post.user}</h3>
        <img src={post.image} alt="cat" />
        <p>{post.caption}</p>
        <p>❤️ {post.likes}</p>
      </div>
    </div>
  );
}

export default PostDetail;