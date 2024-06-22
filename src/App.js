import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <div className="container">
      <div className="Profile">
        <img src="/path_to_your_profile_picture.jpg" alt="Profile" className="profile-pic" />
        <h1>Your Name</h1>
        <a href="https://github.com/sp3ked" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/sp3ked" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Content">
        <Projects />
      </div>
    </div>
  );
}

export default App;