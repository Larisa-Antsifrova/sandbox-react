import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState("Input text");

  return (
    <div className="App">
      <Counter />

      <ClassCounter />

      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />

      <div className="post">
        <div className="post__content">
          <p>
            <strong>1. JavaScript</strong>
          </p>

          <p>JS - one of the programming languages, used widely in browsers.</p>
        </div>

        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
