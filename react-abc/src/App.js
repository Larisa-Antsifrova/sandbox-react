import React from "react";
import PostItem from "./components/PostItem";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <PostItem
        post={{
          id: 1,
          title: "JavaScript",
          description:
            "JS - one of the programming languages, used widely in browsers.",
        }}
      />
      <PostItem
        post={{
          id: 2,
          title: "CSS",
          description: "Declarative language for styles.",
        }}
      />
      <PostItem
        post={{
          id: 3,
          title: "HTML",
          description: "Hyper Text Markup Language",
        }}
      />
      <PostItem
        post={{
          id: 4,
          title: "React",
          description: "One of the tools to build user interfaces.",
        }}
      />
      <PostItem
        post={{
          id: 5,
          title: "Vue",
          description: "The best framework to build user interfaces :p.",
        }}
      />
    </div>
  );
}

export default App;
