import "./Header.css";

function Header({ setView }) {
  return (
    <div className="header">
      <h2 onClick={() => setView("feed")}>Instagram</h2>
      <button onClick={() => setView("profile")}>Perfil</button>
    </div>
  );
}

export default Header;