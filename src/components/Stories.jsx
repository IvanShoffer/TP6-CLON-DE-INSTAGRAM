import "./Stories.css";

function Stories() {
  const stories = [1,2,3,4,5];

  return (
    <div className="stories">
      {stories.map((s, i) => (
        <div key={i} className="story">
          <img src={`https://i.pravatar.cc/150?img=${i}`} />
          <p>@user</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;