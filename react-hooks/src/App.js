import './App.css';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from './components/List'

function App() {
    const username = useInput('')
    const password = useInput('')

  return (
    <div>
        <section className='demo-section'>
            <List/>
        </section>

        <section className='demo-section'>
            <h2>React Hooks</h2>

            <input type="text" placeholder='username' {...username}/>
            <input type="text" placeholder='password'  {...password}/>

            <button onClick={()=>console.log(username.value, password.value)}>Click</button>
        </section>

        <section className='demo-section'>
            <Hover/>
        </section>
    </div>
  );
}

export default App;
