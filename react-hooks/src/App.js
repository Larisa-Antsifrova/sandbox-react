import './App.css';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from './components/List'
import {useState} from "react";
import useDebounce from "./hooks/useDebounce";

function App() {
    const username = useInput('')
    const password = useInput('')

    const [value, setValue] = useState('')

    const debouncedSearch = useDebounce(searchTodo, 500)

    function searchTodo (query){
        fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
            .then(response => response.json())
            .then(result => console.log(result))
    }

    const onChange = (event) => {
        setValue(event.target.value)

        debouncedSearch(event.target.value)
    }

  return (
    <div>
        <section>
            <input type="text" placeholder='search' value={value} onChange={onChange}/>
        </section>

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
