import React, { useState } from "react";
import PostItem from "./components/PostItem";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description:
        "JS - one of the programming languages, used widely in browsers.",
    },
    {
      id: 2,
      title: "CSS",
      description: "Declarative language for styles.",
    },
    {
      id: 3,
      title: "HTML",
      description: "Hyper Text Markup Language",
    },
    {
      id: 4,
      title: "React",
      description: "One of the tools to build user interfaces.",
    },
    {
      id: 5,
      title: "Vue",
      description: "The best framework to build user interfaces :p.",
    },
  ]);

  return (
    <div className="App">
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
