import "./Sidebar.css";

function Sidebar({ setView }) {
  return (
    <div className="sidebar">
      <h2>Instagram</h2>

      <div className="perfil">
        <img src="https://i.pravatar.cc/100" />
        <h3>cat_user</h3>
        <p>@cat_user</p>
      </div>

      <button onClick={() => setView("feed")}>Home</button>
      <button onClick={() => setView("profile")}>Perfil</button>
      <button>Reels</button>
      <button>Notifications</button>
    </div>
  );
}

export default Sidebar;