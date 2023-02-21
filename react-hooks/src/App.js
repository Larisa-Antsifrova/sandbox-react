import './App.css';
import {useState} from "react";

function App() {
    const [value, setValue] = useState('')
    const onChange = event => setValue(event.target.value)

  return (
    <div>
     <h2>React Hooks</h2>

        <input type="text" value={value} onChange={onChange}/>
    </div>
  );
}

export default App;
