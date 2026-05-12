import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PostDetail from "./components/PostDetail";
import Profile from "./components/Perfil";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [view, setView] = useState("feed");

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => {
        const data = res.data.map((img, i) => ({
          id: img.id,
          image: img.url,
          likes: Math.floor(Math.random() * 500),
          user: "cat_user_" + i,
          caption: "Miren este gato 😺",
        }));
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <Header setView={setView} />
      
      {view === "feed" && (
        <Feed posts={posts} onSelectPost={setSelectedPost} />
      )}

      {view === "profile" && <Profile posts={posts} />}

      {selectedPost && (
        <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}

export default App;