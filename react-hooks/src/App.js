import './App.css';
import useInput from "./hooks/useInput";

function App() {
    const username = useInput('')
    const password = useInput('')

  return (
    <div>
     <h2>React Hooks</h2>

        <input type="text" placeholder='username' {...username}/>
        <input type="text" placeholder='password'  {...password}/>

        <button onClick={()=>console.log(username.value, password.value)}>Click</button>
    </div>
  );
}

export default App;
