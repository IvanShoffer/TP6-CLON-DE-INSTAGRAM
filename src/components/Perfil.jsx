import "./Perfil.css";

function Profile({ posts }) {
  return (
    <div className="profile">
      <h2>cat_user</h2>
      <p>Bio: amante de gatos 😺</p>
      <p>Publicaciones: {posts.length}</p>
      <p>Seguidores: 1200</p>
      <p>Siguiendo: 300</p>

      <div className="grid">
        {posts.map((p) => (
          <img key={p.id} src={p.url} alt="cat" />
        ))}
      </div>
    </div>
  );
}

export default Profile;