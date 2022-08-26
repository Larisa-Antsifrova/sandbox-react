import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Input text");

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <h2>{likes}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
