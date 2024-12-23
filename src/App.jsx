import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <div className="profile-container">
      <ImageCard />
      <ProfileCard
        name={"Amin Mahmidi"}
        title={"Frontend Developer"}
        bio={"Passionate about building web applications with React"}
      />
    </div>
  );
}

export default App;
