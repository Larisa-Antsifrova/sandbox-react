import React, {useEffect, useState} from 'react';

const List = () => {
    const [todos, setTodos] = useState([])
    const [page, setPage] = useState(1)
    const limit = 20

    const fetchTodos = (page, limit)=> {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(()=>{
        fetchTodos(page, limit)
    }, [])

    return (
        <div>
            {todos.map(todo =>
            <div key={todo.id} style={{padding: 30, border: '2px solid tomato'}}>{todo.title}</div>
            )}
        </div>
    );
};

export default List;