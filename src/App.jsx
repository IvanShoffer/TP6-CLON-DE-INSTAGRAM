import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import Trending from "./components/Trending";
import Profile from "./components/Perfil";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState("feed");
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=50")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <Sidebar setView={setView} />

      <div className="content">
        {loading && <p>Cargando...</p>}

        {!loading && view === "feed" && (
          <>
            <Stories />
            <Trending posts={posts} onSelect={setSelectedPost} />
          </>
        )}

        {view === "profile" && <Profile posts={posts} />}
      </div>

   
      {selectedPost && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedPost.url} alt="cat" />

            <p>😺 Gatito</p>

            <button onClick={() => setLikes(likes + 1)}>
              ❤️ {likes}
            </button>

            <button onClick={() => setSelectedPost(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;